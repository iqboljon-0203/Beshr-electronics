import React from "react";
import { Context } from "../Wrapper";
import "./Products.css";
import img from "./img.png";
import FadeIn from "react-fade-in";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import ScrollToTop from "../Scroll/ScrollToTop";
function Products({ topNav }) {
  const location = useParams();

  const context = React.useContext(Context);
  const [json, setJson] = React.useState([]);
  React.useEffect(() => {
    console.log(location);
    fetch(
      "https://beshr.app.techdatasoft.uz/api/category/product/" + location.id
    )
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);
  const url = "https://beshr.app.techdatasoft.uz/cover/";
  return (
    <div className="over__products bg__dark">
      <ScrollToTop />
      <div className="nav__container">{topNav}</div>

      <div className=" products">
        <div className="row__product pr">
          <div className="title">
            <h1>
              {context.locale === "uz"
                ? localStorage.getItem("tab_uz")
                : context.locale === "en"
                ? localStorage.getItem("tab_en")
                : localStorage.getItem("tab_ru")}
            </h1>
          </div>
          <FadeIn className="cards__product">
            {json.map((item) => (
              <Link to={"/products/" + item.id} key={item.id}>
                <div className="card">
                  <img src={url + item.cover} alt="" />
                  <b>{item.Title}</b>
                  <p>{item.Volt}</p>
                </div>
              </Link>
            ))}
          </FadeIn>
        </div>
      </div>
      <div className="custom__contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
