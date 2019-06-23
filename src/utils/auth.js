import auth0 from "auth0-js"
import { navigate } from "gatsby"

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const setSession = () => (err, authResult) => {
  if (err) {
    navigate("/")
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    localStorage.setItem("isLoggedIn", true)
    navigate("/app")
    return setUser(authResult.idTokenPayload)
  }
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  return localStorage.getItem("isLoggedIn") === "true"
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = () => {
  if (!isBrowser) return

  navigate(`/logout`)
  setUser({})
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === true
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()

  auth.checkSession({}, setSession(callback))
}
