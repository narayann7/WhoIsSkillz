import { Button, Card, useMediaQuery } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
const { BackgroundCard, CenterCard, Text } = common_styles;
function About() {
  const md = useMediaQuery("(max-width:900px)");
  const md2 = useMediaQuery("(min-width:900px)");
  return (
    <BackgroundCard id="about">
      <CenterCard>
        <Text>Under development.</Text>
      </CenterCard>
    </BackgroundCard>
  );
}

export default About;
