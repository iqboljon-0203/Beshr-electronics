import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper";
import Mobile from './components/Mobile/Mobile'
import App from "./App";
import Footer from "./components/Footer/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      {
        window.innerWidth > 768 ? <App /> : <Mobile />
      }
      {/* <Footer /> */}
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
