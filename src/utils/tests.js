import renderer from "react-test-renderer"

export const render = ReactElement => {
  return renderer.create(ReactElement).toJSON()
}
