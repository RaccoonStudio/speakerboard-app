import React from "react"

import Header from "../Header"
import { render } from "../../utils/tests"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = render(<Header siteTitle="Test title" />)

    expect(tree).toMatchSnapshot()
  })
})
