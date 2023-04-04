import React from "react";
import ArrowDown from "./../export/svg";
import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { FormattedMessage } from "react-intl";
import img1 from "./img/2.png";
import img2 from "./img/1.png";
import img3 from "./img/3.png";
import Slider from "react-slick";
function Header() {
  const [json, setJson] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fetch("https://beshr.app.techdatasoft.uz/api/slider/all")
      .then((response) => response.json())
      .then((json) => setJson(json));
    
      setTimeout(() => {
        setLoad(false)
      }, 2000);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const url = "https://beshr.app.techdatasoft.uz/images/";
  return (
    <React.StrictMode>
      {load && (
        <div className="loader">
          <div class="lds-hourglass"></div>
        </div>
      )}
      <div className="wel__container">
        <Slider {...settings}>
          <div className="home-container">
            <div className="grid__home">
              <div className="speace">
                <h1>
                  <FormattedMessage id="beshr" />
                </h1>
                <p>
                  <FormattedMessage id="Innovative" />
                </p>
                <button className="btn">
                  {/* <ArrowDown />/ */}
                  <FormattedMessage id="download_catalog" />
                </button>
              </div>
              <div className="beetwen">
                <div className="slider-home">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-container bg1">
            <div className="grid__home">
              <div className="speace">
                <h1>
                  <FormattedMessage id="beshr" />
                </h1>
                <p>
                  <FormattedMessage id="Innovative" />
                </p>
                <button className="btn">
                  {/* <ArrowDown />/ */}
                  <FormattedMessage id="download_catalog" />
                </button>
              </div>
              <div className="beetwen">
                <div className="slider-home">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-container bg2">
            <div className="grid__home">
              <div className="speace">
                <h1>
                  <FormattedMessage id="beshr" />
                </h1>
                <p>
                  <FormattedMessage id="Innovative" />
                </p>
                <button className="btn">
                  {/* <ArrowDown />/ */}
                  <FormattedMessage id="download_catalog" />
                </button>
              </div>
              <div className="beetwen">
                <div className="slider-home">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </React.StrictMode>
  );
}

export default Header;
