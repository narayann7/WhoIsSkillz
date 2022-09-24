import React from "react";
import common_styles from "../components/common_styles";
import { useRootContext } from "./../context_api/root_context";
import { about_me } from "../utility/constants_data";
const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function About() {
  const { Mq } = useRootContext();

  return (
    <BackgroundCard id="about">
      <CenterCard className="reveal" style={CenterCardStyle()}>
        <div style={aboutContentStyle()}>
          <Text style={aboutMeStyle()}>About me.</Text>
        </div>
        <div>
          <Text2
            style={{
              fontSize: Mq.sm ? "1rem" : Mq.md ? "1.1rem" : "1.4rem",
            }}
          >
            {about_me}
          </Text2>
        </div>
      </CenterCard>
    </BackgroundCard>
  );

  function aboutMeStyle() {
    return {
      fontFamily: "Be Vietnam Pro",
      fontSize: Mq.sm ? "1.5rem" : Mq.md ? "25px" : "35px",

      fontWeight: "600",
      marginBottom: "10px",
    };
  }

  function aboutContentStyle() {
    return {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      width: "100%",
    };
  }

  function CenterCardStyle() {
    return {
      width: Mq.sm ? "75vw" : Mq.md ? "65vw" : "50vw",
      paddingLeft: Mq.sm ? "0px" : Mq.md ? "0px" : "20px",
      display: "flex",
      marginLeft: Mq.sm ? "0px" : "50px",
      marginBottom: Mq.sm ? "100px" : "0px",
      justifyContent: "center",
      alignItems: "center",
    };
  }
}

export default About;
