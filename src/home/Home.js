import React, { useContext } from "react";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
import "./main.css";
import { Context } from "../components/Wrapper";
import { FormattedMessage } from "react-intl";
import Header from "../components/Header/Header";
import PowerTabs from "../components/Tab/Tab";
import Battery from "../components/Battery/Battery";
import Partners from "../components/Partner/Partner";
import Contact from "../components/Contact/Contact";
import img1 from "../assets/images/img/1.svg";
import img2 from "../assets/images/img/2.svg";
import img3 from "../assets/images/img/3.svg";
import img4 from "../assets/images/img/4.svg";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import { Link, Route, Routes } from "react-router-dom";
import Product from "../components/Product/Product";
import { Lang } from "../App";
import Footer from "../components/Footer/Footer";
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;
const fullPageOptions = {
  scrollSensitivity: 6,
  touchSensitivity: 12,
  scrollSpeed: 200,
  resetSlides: true,
  hideScrollBars: true,
  // enableArrowKeys: true,
  activeSlide: 0,
};
const topNavStyle = {
  textAlign: "center",
  position: "fixed",
  width: "100%",
  cursor: "pointer",
  top: "0px",
  height: "10vh",
};

const horizontalNavStyle = {
  position: "absolute",
  width: "100%",
  top: "50%",
  zIndex: 10,
};

const horizontalSliderProps = {
  name: "horizontalSlider1",
  infinite: true,
};

class FullpageReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0,
      },
      FormattedMessage,
      Context,
      darkbar: false,
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById("horizontal-nav");
    }

    if (name === "horizontalSlider1") {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === "horizontalSlider1") {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide,
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }
  componentDidMount() {}

  render() {
    const { active } = this.state;
    const { FormattedMessage } = this.state;
    const Context = this.context;
    const currentActive = active.Fullpage;
    const page1 = changeFullpageSlide.bind(null, 0);
    const page2 = changeFullpageSlide.bind(null, 1);
    const page3 = changeFullpageSlide.bind(null, 2);
    const page4 = changeFullpageSlide.bind(null, 3);
    const page5 = changeFullpageSlide.bind(null, 4);
    const page6 = changeFullpageSlide.bind(null, 5);

    const horizontalSliderName = horizontalSliderProps.name;
    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive - 1
    );
    const nextHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive + 1
    );
    const topNav = (
      <div style={topNavStyle} className="navbar">
        <Link to={"/"}>
          <span onClick={page1}>
            <button>
              <h1>Beshr</h1>
            </button>
          </span>
        </Link>
        <div className="row">
          <Link to={"/"}>
            <span>
              <button onClick={page2}>
                <FormattedMessage id="app.header1" />
              </button>
            </span>
          </Link>
          {/* <span>
            <button onClick={page3}>3</button>
          </span> */}
          <Link to={"/"}>
            <span>
              <button onClick={page4}>
                <FormattedMessage id="app.header2" />
              </button>
            </span>
          </Link>
          <Link to={"/"}>
            <span>
              <button onClick={page5}>
                <FormattedMessage id="app.header3" />{" "}
              </button>
            </span>
          </Link>
          <Link to={"/"}>
            <span>
              <button onClick={page6}>
                <FormattedMessage id="app.header4" />
              </button>
            </span>
          </Link>
          <Lang />
        </div>
        <button>
          <a href="https://www.facebook.com/beshrbatteries">
            <img src={img1} alt="" />
          </a>
          <a href="https://www.instagram.com/beshrbatteries/">
            <img src={img2} alt="" />
          </a>
          <a href="https://t.me/beshrbatteries">
            <img src={img3} alt="" />
          </a>
          <a href="https://vm.tiktok.com/ZSJtDSaL7/">
            <img src={img4} alt="" />
          </a>
        </button>
      </div>
    );

    const horizontalNav = (
      <div id="horizontal-nav" style={horizontalNavStyle}>
        <span onClick={prevHorizontalSlide}>
          <button>PREV</button>
        </span>
        <span
          style={{ position: "absolute", right: "0px" }}
          onClick={nextHorizontalSlide}
        >
          <button>Next</button>
        </span>
      </div>
    );

    const horizontalSlides = [
      <Slide style={{ backgroundColor: "transparent" }}>
        <p>Horizontal 1</p>
      </Slide>,
      <Slide style={{ backgroundColor: "transparent" }}>
        <p>Horizontal 2</p>
      </Slide>,
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const horizontalSlider = (
      <HorizontalSlider id="horizontal-slider-1" {...horizontalSliderProps}>
        {horizontalNav}
      </HorizontalSlider>
    );

    const verticalSlides = [
      <Slide>
        <Header />
      </Slide>,
      <Slide style={{ backgroundColor: "#141414" }}>
        {currentActive === 1 ? <PowerTabs /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#141414" }}>
        {currentActive === 2 ? <Battery /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#141414" }}>
        {currentActive === 3 ? <About /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#141414" }}>
        {currentActive === 4 ? <Partners /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#141414" }}>
        {currentActive === 5 ? <Contact /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#141414" }}>
        {currentActive === 6 ? (
          <Footer
            click={page2}
            click1={page6}
            click2={page4}
            click3={page5}
            click4={page6}
          />
        ) : (
          ""
        )}
      </Slide>,
    ];
    fullPageOptions.slides = verticalSlides;

    return (
      <div className="root">
        <Routes>
          <Route
            path="/"
            element={
              <Fullpage
                onSlideChangeStart={this.onSlideChangeStart}
                onSlideChangeEnd={this.onSlideChangeEnd}
                {...fullPageOptions}
                style={{ width: "10vw" }}
              >
                {topNav}
              </Fullpage>
            }
          />
          <Route path="/product/:id" element={<Products topNav={topNav} />} />
          <Route path="/products/:id" element={<Product topNav={topNav} />} />
        </Routes>
      </div>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = "fixed";
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = "absolute";
}

export default FullpageReact;
