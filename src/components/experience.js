import { Button, Card } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
const { BackgroundCard, CenterCard } = common_styles;
function Experience() {
  return (
    <BackgroundCard id="experience">
      <CenterCard>
        <Button onClick={() => {}}>Experience</Button>
      </CenterCard>
    </BackgroundCard>
  );
}

export default Experience;
