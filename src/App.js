import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import ForgotPage from "./pages/forgot";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import Header from "./components/Header";

const Main = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(7, 71, 166);
`;

const App = () => {
  return (
    <Router>
      <Main>
        <Header />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/forgot" component={ForgotPage} />
      </Main>
    </Router>
  );
};

export default App;
