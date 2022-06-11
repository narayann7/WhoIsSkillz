import { Button, Card } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
const { BackgroundCard, CenterCard } = common_styles;
function About() {
  return (
    <BackgroundCard>
      <CenterCard>
        <Button
          onClick={() => {
          }}
        >
          About
        </Button>
      </CenterCard>
    </BackgroundCard>
  );
}

export default About;
