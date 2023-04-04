import React from "react";
import "./footer.css";
import img from "./abba.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Footer({click,click1,click2,click3  }) {
  return (
    <footer>
      <div className="container">
        <div className="col__footer">
          <h1>Beshr</h1>
          <p>
            <FormattedMessage id="manzil" />
          </p>
        </div>
        <div className="col__footer">
          <div className="item__footer">
            <h2  onClick={click2}>
            <Link to="/">   <FormattedMessage id="app.header2" /></Link>
            </h2>
            <p>
              <span  onClick={click2}>
             <Link to="/">    <FormattedMessage id="app.header2" /></Link>
              </span>
            </p>
            <p>
              <span  onClick={click}>
              <Link to="/">   <FormattedMessage id="app.header1" /></Link>
              </span>
            </p>
            <p>
              <span  onClick={click3}>
              <Link to="/">   <FormattedMessage id="app.header3" /></Link>
              </span>
            </p>
            <p>
              <span  onClick={click1}>
             <Link to="/">    <FormattedMessage id="app.header5" /></Link>
              </span>
            </p>
          </div>
          <div className="item__footer">
            <h2 onClick={click}>
            <Link to="/">   <FormattedMessage  id="app.header1" /></Link>
            </h2>
            <p>
              <span onClick={click}>
             <Link to="/">    <FormattedMessage  id="footer1" /></Link>
              </span>
            </p>
            <p>
              <span onClick={click}>
              <Link to="/">   <FormattedMessage  id="footer2" /></Link>
              </span>
            </p>
            <p>
              <span onClick={click}>
              <Link to="/">   <FormattedMessage  id="footer3" /></Link>
              </span>
            </p>
            <p>
              <span  onClick={click}>
              <Link to="/">   <FormattedMessage id="footer4" /></Link>
              </span>
            </p>
          </div>
          <div className="item__footer">
            <h2>
             <Link to="/">  <FormattedMessage id="app.header5" /></Link>
            </h2>
            <p>
              <span><a href=" https://www.instagram.com/beshrbatteries/">Instagram</a></span>
            </p>
            <p>
              <span><a href=" https://www.facebook.com/beshrbatteries">Facebook</a></span>
            </p>
            <p>
              <span><a href="https://t.me/beshrbatteries">Telegram</a></span>
            </p>
            <p>
              <span><a href="https://vm.tiktok.com/ZSJtDSaL7/">Tik-Tok</a></span>
            </p>
          </div>
        </div>
      </div>
      <div className="row__footer">
        <article>  <FormattedMessage id="footer5" /></article>
        <article>
        <FormattedMessage id="footer6" />
          <img src={img} alt="" />
        </article>
      </div>
    </footer>
  );
}

export default Footer;
