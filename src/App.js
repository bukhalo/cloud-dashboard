import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import ForgotPage from './pages/forgot';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import Header from './components/Header';


// const logoSpin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

const Main = styled.div`
  text-align: center;
`;

// const Header = styled.header`
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// `;

// const Logo = styled.img`
//   animation: ${logoSpin} infinite 20s linear;
//   height: 40vmin;
//   pointer-events: none;
// `;

// const Link = styled.a`
//   color: #61dafb;
// `;

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
