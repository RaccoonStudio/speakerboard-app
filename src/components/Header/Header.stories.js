import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"
import Header from "./Header"

const stories = storiesOf(`Header`, module)

stories.add(`overview`, () => (
  <Header siteTitle={text(`Site title`, undefined)}></Header>
))
