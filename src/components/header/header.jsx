import React from "react";
import "./header.css";

import lp_logo from "../../assets/icons/lp_logo_circle.png";
function header() {
  return (
    <section class="main_header_section just-center-r">
      <div className="nav_bar ">
        <div className="nav_left ">
          <div className="lp">
            <img className="LP_logo" src={lp_logo} alt="lp_logo" />
          </div>
        </div>
        <div className="nav_right">
          <div className="about nav_items_p">
            <a href="#about" className="about_link">
              <h3>about</h3>
            </a>
            <div className="about_line"></div>
          </div>
          <div className="experience nav_items_p">
            <a href="#" className="experience_link">
              <h3>experience</h3>
            </a>
            <div className="experience_line"></div>
          </div>
          <div className="projets">
            <a href="#" className="projets_link">
              <h3>projets</h3>
            </a>
            <div className="projets_line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default header;
{
  /* <div className="lx">


</div> */
}
