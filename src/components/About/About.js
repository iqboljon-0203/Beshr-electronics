import React from "react";
import "./About.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import img from "../../assets/images/img/onas1.png";
import CountUp from "react-countup";
import img2 from "../../assets/images/img/onas2.png";
import { FormattedMessage } from "react-intl";
function About() {
  const [json, setJson] = React.useState([]);
  React.useEffect(() => {
    fetch("https://beshr.app.techdatasoft.uz/api/slider/all")
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);
  return (
    <div className="about" id="about">
      <FadeIn className="about__body">
        <div>
          <h1> <FormattedMessage id="app.header2"/></h1>
          <p>
          <FormattedMessage id="ab_txt"/>
          </p>
          <span>
          <FormattedMessage id="ab_bottomtxt"/>
          </span>
          <div className="row__about">
            <div className="item__r">
              <h1>
                {/* {json?.number?.[0]?.n1} */}
                <CountUp end={json?.number?.[0]?.n1} duration={3} />
              </h1>
              <span> <FormattedMessage id="sold_product"/> </span>
            </div>
            <div className="item__r">
              <h1>
                <CountUp end={json?.number?.[0]?.name1} duration={3} />
              </h1>
              <span> <FormattedMessage id="satisfied_customer"/> </span>
            </div>
            <div className="item__r">
              <h1>
                <CountUp end={json?.number?.[0]?.n2} duration={3} />
              </h1>
              <span> <FormattedMessage id="specialist"/> </span>
            </div>
            <div className="item__r">
              <h1>
                <CountUp end={json?.number?.[0]?.name2} duration={3} />
              </h1>
              <span> <FormattedMessage id="assortment_types"/> </span>
            </div>
          </div>
        </div>
        <div>
          <div className="o__col">
            <div className="o__img">
              <img src={img} alt="" />
            </div>
            <div className="o__img">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
