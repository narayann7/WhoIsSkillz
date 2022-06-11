import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import AppTheme from "../utility/local_storage";
import { useRootContext } from "../context_api/root_context";
import common_styles from "../components/common_styles";
import "./common_styles.css";
const { BackgroundCard, CenterCard, Text } = common_styles;
const iam = [
  "App Developer .",
  "Backend enthusiastic .",
  "Problem Solver .",
  "Backend enthusiastic .",
  "App Developer .",
];
function Landing() {
  const { switchTheme } = useRootContext();

  return (
    <BackgroundCard>
      <CenterCard>
        <Text variant="h4">Hello 👋🏻 , I’m</Text>
        <Text variant="h2">Laxmi Narayan</Text>
        <IamSpinner />
      </CenterCard>
    </BackgroundCard>
  );
}

const Iam = ({ content }) => {
  return (
    <span>
      <Text variant="h3">{content}</Text>
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
