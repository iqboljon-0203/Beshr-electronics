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
function Partners() {
  return (
    <div className="section__partner">
      <FadeIn className="partner">
        <div className="item__partner">
          <img src={img1} alt="" />
        </div>
        <div className="item__partner">
          <img src={img2} alt="" />
        </div>
        <div className="item__partner">
          <img src={img3} alt="" />
        </div>
        <div className="item__partner">
          <img src={img4} alt="" />
        </div>
        <div className="item__partner">
          <img src={img5} alt="" />
        </div>
        <div className="item__partner">
          <img src={img6} alt="" />
        </div>
        <div className="item__partner">
          <img src={img7} alt="" />
        </div>
        
      </FadeIn>
    </div>
  );
}

export default Partners;
