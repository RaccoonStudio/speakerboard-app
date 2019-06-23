import React from "react"

import { Router } from "@reach/router"
import { Link } from "gatsby"

const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>

const Account = () => (
  <>
    <nav>
      <Link to={"/account"}>Account</Link>
      <Link to={"/account/settings"}>Settings</Link>
    </nav>
    <Router>
      <Home path={"/account"} />
      <Settings path={"/account/settings"} />
    </Router>
  </>
)

export default Account
