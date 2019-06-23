import React from "react"
import { createGlobalStyle } from "styled-components"
import { Colors, Typography } from "../../styles"

const FontFaces = createGlobalStyle``

const FontStyles = createGlobalStyle`
  :root {
    font-size: ${Typography.sizes.rootReset};
  }

  body {
    color: ${Colors.blue.b900};
    font-size: ${Typography.sizes.copy};
    font-weight: ${Typography.weights.regular};
    line-height: ${Typography.lineHeights.comfortable};
  }

  p {
    margin: 0 auto 2em;
    line-height: ${Typography.lineHeights.comfortable};
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: ${Typography.weights.bold};
  }
`

const FontSystem = () => (
  <>
    <FontFaces />
    <FontStyles />
  </>
)

export default FontSystem
