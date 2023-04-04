import React, { useContext, useState } from "react";
import "./App.css";
import { Context } from "./components/Wrapper";
import FullpageReact from "./home/Home";
import "swiper/css/bundle";
import Products from "./components/Products/Products";
import { FormattedMessage } from "react-intl";
import { BrowserRouter } from "react-router-dom";

export function Lang() {
  const context = useContext(Context);
  return (
    <>
      <select value={context.locale} onChange={context.selectLanguage}>
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="uz">UZ</option>
      </select>
    </>
  );
}
function App() {

  return (
    <div className="App">
      <div className="body">
        <BrowserRouter>
          <FullpageReact
            FormattedMessage={FormattedMessage}
          />
          {/* <Products /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
