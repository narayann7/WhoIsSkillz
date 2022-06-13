import { Button, Card } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
const { BackgroundCard, CenterCard, Text } = common_styles;
function Projects() {
  return (
    <BackgroundCard id="projects">
      <CenterCard>
        <Text>Under development.</Text>
      </CenterCard>
    </BackgroundCard>
  );
}

export default Projects;
