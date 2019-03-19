import React from "react";
import styled from "styled-components";

import SignUp from "./components/SignUp";

const Main = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Main>
      <SignUp />
    </Main>
  );
};

export default App;
