import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Logout = () => (
  <Layout>
    <SEO title="Logout" />
    <h1>You're successfully logged out :)</h1>
    <Link to="/app/">Go to the app</Link>
  </Layout>
)

export default Logout
