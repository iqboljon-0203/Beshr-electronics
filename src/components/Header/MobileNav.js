import React from "react";
import { FormattedMessage } from "react-intl";

import { Lang } from "../../App";
function MobileNav() {
  const [active, setactive] = React.useState(false)
  return (
    <div className="mobile__nav">
      <nav>
        <h1>
          <a href="/">Beshr</a>
        </h1>
        <span onClick={()=>setactive(!active)}>{active ? "×" : "☰"}</span>
        <div className={ active ? "row active" : "row"}>
          <a onClick={()=>setactive(!active)} href={"/#product"}>
            <FormattedMessage id="app.header1" />
          </a>
          <a onClick={()=>setactive(!active)} href={"/#about"}>
            <FormattedMessage id="app.header2" />
          </a>
          <a onClick={()=>setactive(!active)} href={"/#partner"}>
            <FormattedMessage id="app.header3" />{" "}
          </a>
          <a onClick={()=>setactive(!active)} href={"/#contact"}>
            <FormattedMessage id="app.header4" />
          </a>
          <Lang />
        </div>
      </nav>
    </div>
  );
}

export default MobileNav;
