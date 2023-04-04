import React from "react";
import { Link } from "react-router-dom";
import "./Tab.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
function MobileTab() {
  const context = React.useContext(Context);
  const [json, setJson] = React.useState([]);
  React.useEffect(() => {
    fetch("https://beshr.app.techdatasoft.uz/api/category/all")
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);
  const url = "https://beshr.app.techdatasoft.uz/cover/";
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container__slider" id="product">
      <Slider {...settings}>
        {json.map((item) => (
          <div>
            <FadeIn className="tabProduct_img">
              <img src={url + item.cover} alt="" />
            </FadeIn>
            <FadeIn className="tabProduct_info">
              <h1>
                {context.locale === "uz"
                  ? item.name_uz
                  : context.locale === "en"
                  ? item.name_en
                  : item.name_ru}
              </h1>
              <p> {context.locale === "uz"
                      ? item.category_uz
                      : context.locale === "en"
                      ? item.category_en
                      : item.category_ru}</p>
              <Link to={"/product/" + item.id}>
                <button><FormattedMessage id="more"/></button>
              </Link>
            </FadeIn>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MobileTab;
