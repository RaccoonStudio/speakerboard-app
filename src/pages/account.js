import React from "react"

import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "fella"}!</p>
}
const Settings = () => <p>Settings</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login…</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to={"/account/"}>Account</Link>
        <Link to={"/account/settings"}>Settings</Link>
      </nav>
      <Router>
        <Home path={"/account/"} user={user} />
        <Settings path={"/account/settings"} />
      </Router>
    </>
  )
}

export default Account
