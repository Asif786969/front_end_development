import renderer from "react-test-renderer";
import Test from "../Test";
import React from "react";

it("renders without crashing", () => {
  const component = renderer.create(<Test />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Test />, div);
// });
