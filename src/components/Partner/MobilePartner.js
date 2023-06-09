import React from "react";
import "./Partner.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import Slider from "react-slick";
function MobilePartner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ]
  return (
    <div className="container__mp" id="partner">
      <Slider {...settings}>
        {img.map((item) => (
          <div>
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MobilePartner;
