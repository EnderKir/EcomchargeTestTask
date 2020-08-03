import React from 'react';

import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const App = () => {
  return (
    <div className="App">
      <Button> Normal Button </Button>
      <Button primary> Primary Button </Button>
    </div>
  );
}

export default App;
