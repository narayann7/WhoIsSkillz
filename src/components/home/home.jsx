import React from "react";
import "./home.css";
import { resume_link } from "../../utility/links.js";
import { linkedin_link } from "../../utility/links.js";
import { github_link } from "../../utility/links.js";
import { gmail_link } from "../../utility/links.js";
import link_logo from "../../assets/icons/ExternalLink.png";
function home() {
  return (
    <section className="main_home_section  just-center-r">
      <div className="main_container just-center-c">
        <div className="center_container just-center-c">
          <h4>Hello 👋 , I’m</h4>
          <h1>Laxmi Narayan</h1>
          <div class="imWrapper">
            <div class="words just-center-c ">
              <span>
                <h3>App developer .</h3>{" "}
              </span>
              <span>
                <h3>Backend enthusiastic .</h3>{" "}
              </span>
              <span>
                <h3>Problem Solver . </h3>{" "}
              </span>
              <span>
                <h3>Backend enthusiastic .</h3>{" "}
              </span>
              <span>
                <h3>App developer .</h3>{" "}
              </span>
            </div>
          </div>

          <a href={resume_link} className="resume_link_c" target="_blank">
            <div className="resume_button just-center-r">
              <h5>Resume</h5>
              <img className="link_logo" src={link_logo} alt="link_logo" />
            </div>
      
          </a>
        </div>
      
      </div>

      <div class="home_socials just-center-c">
        <a href={linkedin_link} target="_blank" className="linkedin"></a>
        <a href={github_link} target="_blank" className="github"></a>
        <a href={gmail_link} target="_blank" className="gmail"></a>


      </div>
    </section>
  );
}

export default home;
