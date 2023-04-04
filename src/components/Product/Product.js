import React, {useState}  from "react";
import { Carousel } from "react-responsive-carousel";
import "./Product.css";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Footer from '../Footer/Footer'
import Modal from "./Modal";
import Contact from "../Contact/Contact";
import ScrollToTop from "../Scroll/ScrollToTop";
function Product({ topNav }) {
  const location = useParams();

  const [json, setJson] = React.useState({});
  React.useEffect(() => {
    console.log(location);
    fetch("https://beshr.app.techdatasoft.uz/api/one/product/" + location.id)
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);
  const url = "https://beshr.app.techdatasoft.uz/cover/";
  const urlTwo = "https://beshr.app.techdatasoft.uz/images/";
  const colors = json?.color;
  const massivColor = colors?.split(",");
  const [modal, setModal] = useState(false)
  return (
    <div className="over__products">
      <ScrollToTop />
      <div className="nav__container">{topNav}</div>
      <div className="bg__dark products">
        <div className="roww__prod">
          <div className="title">
            <h1>
              {json.Title}{" "}
              <span>
                {(() => {
                  switch (json.category) {
                    case "1":
                      return "POWER MAX ALKALINE";
                    case "2":
                      return "POWER ONE ALKALINE ";
                    case "3":
                      return "Power LIFE SUPER HEAVY DUTY ";
                    case "4":
                      return " LITHIUM";
                    case "5":
                      return " FLASHLIGHTS";
                    case "6":
                      return " CLEAR SOUND";
                    case "7":
                      return " ENERGY SOCKETS";
                    case "8":
                      return " SOCKET";
                    case "9":
                      return " LED PENLIGHT";
                    case "10":
                      return "HEAD LIGHT ";
                    default:
                      return null;
                  }
                })()}
              </span>
            </h1>
          </div>
          <div className="row__product">
            <Carousel>
              <img
                src={urlTwo + json?.images?.[0]?.image}
                alt=""
                key={json?.images?.[0]?.id}
              />
              <img
                src={urlTwo + json?.images?.[1]?.image}
                alt=""
                key={json?.images?.[1]?.id}
              />
            </Carousel>
            <div className="txt__pr">
              {json.category === 0 ? (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Volt}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Size" />
                    </span>
                    <p>{json.Blister}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Capacity" />{" "}
                    </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Voltage" />
                    </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Blister_d" />{" "}
                    </span>
                    <p>{json.Dimensions}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="The_weight" />
                    </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Shelf_life" />{" "}
                    </span>
                    <p>{json.Blisterm} </p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Storage_Storage" />{" "}
                    </span>
                    <p>{json.InnerBoxm}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Use_temperature" />{" "}
                    </span>
                    <p>{json.DusterCartoon}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Amount_pc" />{" "}
                    </span>
                    <p>{json.GrossWeight}</p>
                  </div>
                </div>
              ) : json.category === "2" ||
                json.category === "1" ||
                json.category === "3" ||
                json.category === "4" ? (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Volt}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Blister" />
                    </span>
                    <p>{json.Blister}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Inner_box" />{" "}
                    </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Outer_Carton" />{" "}
                    </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  {/* <div className="row__pr">
                  <span>D: </span>
                  <p>{json.Dimensions}</p>
                </div> */}
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Blister_mm_" />{" "}
                    </span>
                    <p>{json.Blisterm}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Inner_box_mm" />
                    </span>
                    <p>{json.InnerBoxm}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Outer_cartoon_cm" />{" "}
                    </span>
                    <p>{json.DusterCartoon}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Gross_weight" />{" "}
                    </span>
                    <p>{json.GrossWeight}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Volume" />{" "}
                    </span>
                    <p>{json.Volume}</p>
                  </div>
                  {/* <div className="row__pr">
                  <span><FormattedMessage id="Color"/></span>
                  <p>{massivColor?.map(item => <button className="color" style={{backgroundColor: item}}>

                  </button>)}</p>
                </div> */}
                </div>
              ) : json.category === "8" ? (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Title}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Model" />{" "}
                    </span>
                    <p>{json.Title}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Port" />{" "}
                    </span>
                    <p>{json.Volt}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Switch" />{" "}
                    </span>
                    <p>{json.Blister}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Voltages" />{" "}
                    </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Amper" />{" "}
                    </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Color" />
                    </span>
                    <p>
                      {massivColor?.map((item) => (
                        <button
                          className="color"
                          style={{ backgroundColor: item }}
                        ></button>
                      ))}
                    </p>
                  </div>
                </div>
              ) : json.category === "6" ? (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Title}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Size" />
                    </span>
                    <p> {json.Title}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Capacity" />{" "}
                    </span>
                    <p>{json.Volt}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Voltage" />
                    </span>
                    <p>{json.Blister}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Blister_d" />{" "}
                    </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="The_weight" />
                    </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Shelf_life" />{" "}
                    </span>
                    <p>{json.Blisterm} </p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Storage_Storage" />{" "}
                    </span>
                    <p>{json.InnerBoxm}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Use_temperature" />{" "}
                    </span>
                    <p>{json.DusterCartoon}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Amount_pc" />{" "}
                    </span>
                    <p>{json.GrossWeight}</p>
                  </div>
                  {/* <div className="row__pr">
                  <span><FormattedMessage id="Color"/></span>
                  <p>
                    {massivColor?.map((item) => (
                      <button
                        className="color"
                        style={{ backgroundColor: item }}
                      ></button>
                    ))}
                  </p>
                </div> */}
                </div>
              ) : json.category === "7" ? (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Title}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Model" />{" "}
                    </span>
                    <p>{json.Title}</p>
                  </div>
                  <div className="row__pr">
                    <span>Meter: </span>
                    <p>{json.Volt}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Port" />{" "}
                    </span>
                    <p>{json.Blister}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Switch" />{" "}
                    </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Amper" />{" "}
                    </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Color" />
                    </span>
                    <p>
                      {massivColor?.map((item) => (
                        <button
                          className="color"
                          style={{ backgroundColor: item }}
                        ></button>
                      ))}
                    </p>
                  </div>
                </div>
              ) : json.category === "11" ? (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Title}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Packaging" />{" "}
                    </span>
                    <p>
                      {" "}
                      {json.Volt} {json.Blister}
                    </p>
                  </div>
                  <div className="row__pr">
                    <span>L: </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>W: </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>D: </span>
                    <p>{json.Blisterm}</p>
                  </div>
                  <div className="row__pr">
                    <span>N.W. </span>
                    <p>{json.InnerBoxm}</p>
                  </div>
                  <div className="row__pr">
                    <span>Aluminium body: </span>
                    <p>{json.Dimensions}</p>
                  </div>
                  <div className="row__pr">
                    <span>High precision focus: </span>
                    <p>{json.DusterCartoon}</p>
                  </div>
                  <div className="row__pr">
                    <span>Batteries Included: </span>
                    <p>{json.GrossWeight}</p>
                  </div>
                  <div className="row__pr">
                    <span>LED Bulb, LongLife:</span>
                    <p>{json.Volume}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Color" />
                    </span>
                    <p>
                      {massivColor?.map((item) => (
                        <button
                          className="color"
                          style={{ backgroundColor: item }}
                        ></button>
                      ))}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="txt__pr">
                  <div className="tit__pr">
                    <h1>{json.Title}</h1>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Packaging" />{" "}
                    </span>
                    <p>
                      {" "}
                      {json.Volt} {json.Blister}
                    </p>
                  </div>
                  <div className="row__pr">
                    <span>L: </span>
                    <p>{json.Innerbox}</p>
                  </div>
                  <br />
                  <div className="row__pr">
                    <span>W: </span>
                    <p>{json.OuterCarton}</p>
                  </div>
                  <div className="row__pr">
                    <span>D: </span>
                    <p>{json.Blisterm}</p>
                  </div>
                  <div className="row__pr">
                    <span>N.W. </span>
                    <p>{json.InnerBoxm}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Wide_angle" />{" "}
                    </span>
                    <p>{json.Dimensions}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Lighting_modes" />{" "}
                    </span>
                    <p>{json.DusterCartoon}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Batteries_Included" />{" "}
                    </span>
                    <p>{json.GrossWeight}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Continuous_use" />
                    </span>
                    <p>{json.Volume}</p>
                  </div>
                  <div className="row__pr">
                    <span>
                      <FormattedMessage id="Color" />
                    </span>
                    <p>
                      {massivColor?.map((item) => (
                        <button
                          className="color"
                          style={{ backgroundColor: item }}
                        ></button>
                      ))}
                    </p>
                  </div>
                </div>
              )}
              <div className="row__pr" style={{padding: "0vw 2vw"}}>
                <span></span>
                <button className="btn__buy" onClick={()=>setModal(true)}><FormattedMessage id="order"/></button>
                {
                  modal && <Modal close={setModal} name={json.Title}/>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom__contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
