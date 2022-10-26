import "./App.css";
import React from "react";
import Test from "./sampleTestComponent/Test";
import styled from "styled-components";
import Navabar from "./Components/Navbar";
import Shop from "./Components/Shop";

function App() {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  return (
    <>
      <Navabar />
      <div className="container">
        <Shop />
      </div>
      <div className="container my-3">
        <h1>Testing</h1>
        <Test />
      </div>

      {/* Testing styled component */}
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </>
  );
}

export default App;
