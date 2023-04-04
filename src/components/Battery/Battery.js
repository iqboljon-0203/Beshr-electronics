import React, { useState } from "react";
import "./Battery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FadeIn from "react-fade-in";
import img from "../../assets/images/battery.svg";
import img1 from "./img/blue/1.png";
import img2 from "./img/blue/2.png";
import img3 from "./img/blue/3.png";
import img43 from "./img/blue/4.png";
import img44 from "./img/blue/5.png";
import img45 from "./img/blue/6.png";

import img4 from "./img/red/1.png";
import img5 from "./img/red/2.png";
import img6 from "./img/red/3.png";

import img46 from "./img/red/4.png";
import img47 from "./img/red/5.png";
import img48 from "./img/red/6.png";

import img7 from "./img/yellow/1.png";
import img8 from "./img/yellow/2.png";
import img9 from "./img/yellow/3.png";

import img57 from "./img/yellow/4.png";
import img58 from "./img/yellow/5.png";
import img59 from "./img/yellow/6.png";
import { FormattedMessage } from "react-intl";
const renderCustomThumbs = () => {
  return [
    <picture>
      <img
        key="01"
        src={img1}
        alt="First Thumbnail"
        height="70"
      />
    </picture>,
    <picture>
      <img
        key="02"
        src={img2}
        alt="Second Thumbnail"
        height="70"
      />
    </picture>,
    <picture>
      <img
        key="03"
        src={img3}
        alt="Third Thumbnail"
        height="70"
      />
    </picture>,
  ];
};
const renderCustomThumbs2 = () => {
  return [
    <picture>
      <img
        key="01"
        src={img4}
        alt="First Thumbnail"
        height="70"
      />
    </picture>,
    <picture>
      <img
        key="02"
        src={img5}
        alt="Second Thumbnail"
        height="70"
      />
    </picture>,
    <picture>
      <img
        key="03"
        src={img6}
        alt="Third Thumbnail"
        height="70"
      />
    </picture>,
  ];
};

const renderCustomThumbs3 = () => {
  return [
    <picture>
      <img
        key="01"
        src={img7}
        alt="First Thumbnail"
        height="70"
      />
    </picture>,
    <picture>
      <img
        key="02"
        src={img8}
        alt="Second Thumbnail"
        height="70"
      />
    </picture>,
    <picture>
      <img
        key="03"
        src={img9}
        alt="Third Thumbnail"
        height="70"
      />
    </picture>,
  ];
};
function Battery() {
  const [Slide, setSlide] = useState("red");
  return (
    <div className="battery">
      <div className="ab__colors">
        <div onClick={() => setSlide("red")}>
          <div className="red"></div>
        </div>
        <div onClick={() => setSlide("blue")}>
          <div className="blue"></div>
        </div>
        <div onClick={() => setSlide("yellow")}>
          <div className="yellow"></div>
        </div>
      </div>

      {Slide === "yellow" ? (
        <FadeIn className="container__battery">
          <div className="img__battery">
            <Carousel  showThumbs={true} renderThumbs={renderCustomThumbs3}>
            <img src={img57} alt="" />
              <img src={img59} alt="" />
              <img src={img58} alt="" />
            </Carousel>
          </div>
          <div className="text__battery">
            <h1><FormattedMessage id="yellowtext"/></h1>
            <p>
            <FormattedMessage id="yellowtitle"/>
            </p>
            <div
              className="grid__battery"
              style={{ gap: "2vw", gridTemplateColumns: "repeat(3,1fr)" }}
            >
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem1"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem2"/> </span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem3"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem4"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem5"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem6"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem7"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="yellowitem8"/></span>
              </div>
            </div>
            <p>
            <FormattedMessage id="yellowend"/>
            </p>
          </div>
        </FadeIn>




























      ) : Slide === "red" ? (
        <FadeIn className="container__battery">
          <div className="img__battery">
            <Carousel   showThumbs={true} renderThumbs={renderCustomThumbs2}>
              <img src={img46} alt="" />
              <img src={img47} alt="" />
              <img src={img48} alt="" />
            </Carousel>
          </div>
          <div className="text__battery">
            <h1><FormattedMessage id="redtext"/></h1>
            <p>
            <FormattedMessage id="redtitle"/>
            </p>
            <div className="grid__battery">
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="reditem"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="reditem1"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="reditem2"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span><FormattedMessage id="reditem3"/> </span>
              </div>
            </div>
            <p>
            <FormattedMessage id="redend"/>
            </p>
          </div>
        </FadeIn>
      ) : (
        <FadeIn className="container__battery">
          <div className="img__battery">
            <Carousel   showThumbs={true} renderThumbs={renderCustomThumbs}>
              <img src={img43} alt="" />
              <img src={img44} alt="" />
              <img src={img45} alt="" />
            </Carousel>
          </div>
          <div className="text__battery">
            <h1><FormattedMessage id="bluetext"/></h1>
            <p>
            <FormattedMessage id="bluetitle"/>
            </p>
            <div
              className="grid__battery"
              style={{ gap: "2vw", gridTemplateColumns: "repeat(3,1fr)" }}
            >
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem1"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem2"/> </span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem3"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem4"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem5"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem6"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem7"/></span>
              </div>
              <div className="row__battery">
                <img src={img} alt="" />
                <span> <FormattedMessage id="yellowitem8"/></span>
              </div>
            </div>
            <p>
            <FormattedMessage id="blueend"/>
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default Battery;
