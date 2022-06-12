import { Button, Card } from "@mui/material";
import React from "react";
import common_styles from "../components/common_styles";
const { BackgroundCard, CenterCard } = common_styles;
function Projects() {
  return (
    <BackgroundCard id="projects">
      <CenterCard>
        <Button onClick={() => {}}>Projects</Button>
      </CenterCard>
    </BackgroundCard>
  );
}

export default Projects;
