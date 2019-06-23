import React from "react"
import { handleAuthentication } from "../utils/auth"

const Callback = () => {
  handleAuthentication()

  return <p>Loading…</p>
}

export default Callback
