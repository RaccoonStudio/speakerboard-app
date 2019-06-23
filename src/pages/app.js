import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PrivateRoute from "../components/PrivateRoute"
import { login, isLoggedIn, getCurrentUser, logout } from "../utils/auth"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "fella"}!</p>
}
const Settings = () => <p>Settings</p>

const App = () => {
  if (!isLoggedIn()) {
    login()

    return <p>Redirecting to login</p>
  }

  const user = getCurrentUser()

  return (
    <Layout>
      <nav>
        <Link to={`/app/home`}>Home</Link>
        <Link to={`/app/settings`}>Settings</Link>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Logout
        </a>
      </nav>
      <Router>
        <PrivateRoute path={"/app/home"} component={Home} user={user} />
        <PrivateRoute path={`/app/settings`} component={Settings} />
      </Router>
    </Layout>
  )
}

export default App
