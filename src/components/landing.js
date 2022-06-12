import React from "react";
import { Button } from "@mui/material";
import { resume_link } from "../utility/links";
import { useRootContext } from "../context_api/root_context";
import { HiExternalLink } from "react-icons/hi";
import common_styles from "../components/common_styles";
import "./common_styles.css";
const { BackgroundCard, CenterCard, Text, CenterCardLanding } = common_styles;
const iam = [
  "App Developer .",
  "Backend enthusiastic .",
  "Problem Solver .",
  "Backend enthusiastic .",
  "App Developer .",
];
function Landing() {
  const { isDark } = useRootContext();

  return (
    <BackgroundCard id="landing">
      <CenterCardLanding>
        <Text
          style={{
            fontSize: "30px",
          }}
        >
          {`Hello ${isDark ? "👋🏻" : "👋🏿"}, I’m`}
        </Text>
        <Text
          style={{
            fontSize: "70px",
            fontWeight: "700",
            color: isDark ? "#6EB69D" : "#035a69",
          }}
        >
          Laxmi Narayan
        </Text>
        <IamSpinner />
        <Button
          onClick={() => {
            window.open(resume_link, "_blank");
          }}
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "8px",
            paddingBottom: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            borderRadius: "0.9rem",
            border: "2px solid #6EB69D",
            marginTop: "30px",
            backgroundColor: isDark ? "#6EB69D" : "#035a69",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              letterSpacing: "0.05rem",
              color: isDark ? "black" : "white",
            }}
          >
            Resume
          </Text>
          <HiExternalLink size="1.2rem" color={isDark ? "black" : "white"} />
        </Button>
      </CenterCardLanding>
    </BackgroundCard>
  );
}

const Iam = ({ content }) => {
  return (
    <span>
      <Text
        style={{
          fontSize: "40px",
        }}
      >
        {content}
      </Text>
    </span>
  );
};

const IamSpinner = () => {
  return (
    <div class="imWrapper">
      <div class="words just-center-c ">
        {iam.map((item, index) => {
          return <Iam content={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Landing;
