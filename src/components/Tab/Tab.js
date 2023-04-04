import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tab.css";
import { Context } from "../Wrapper";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
import { FormattedMessage } from "react-intl";
export default function PowerTabs() {
  const context = React.useContext(Context);
  const [json, setJson] = React.useState([]);
  React.useEffect(() => {
    fetch("https://beshr.app.techdatasoft.uz/api/category/all")
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);

  const url = "https://beshr.app.techdatasoft.uz/cover/";
  return (
    <div className="bg__dark">
      <FadeIn className="power__cont">
        <Tabs>
          <div className="power_right">
            <div className="Tab_right">
              <TabList>
                {json.map((item) => (
                  <Tab>
                    <button
                      className="transparent"
                      value={item.name_uz}
                      id={item.name_ru}
                      name={item.name_en}
                      onClick={(e) => {
                        localStorage.setItem("tab_uz", e.target.value);
                        localStorage.setItem("tab_ru", e.target.id);
                        localStorage.setItem("tab_en", e.target.name);
                        console.log();
                      }}
                    >
                      {context.locale === "uz"
                      ? item.name_uz
                      : context.locale === "en"
                      ? item.name_en
                      : item.name_ru}
                    </button>
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>
          <div className="tabProduct">
            {json.map((item) => (
              <TabPanel>
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
                  <p>
                    {context.locale === "uz"
                      ? item.category_uz
                      : context.locale === "en"
                      ? item.category_en
                      : item.category_ru}
                  </p>
                  <Link to={"/product/" + item.id}>
                    <button><FormattedMessage id="more"/></button>
                  </Link>
                </FadeIn>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </FadeIn>
    </div>
  );
}
