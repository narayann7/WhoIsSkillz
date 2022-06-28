import React from "react";
import common_styles from "../components/common_styles";
import { Divider, Box } from "@mui/material";
import { margin } from "@mui/system";
const { BackgroundCard, CenterCard, Text, Text2 } = common_styles;
function Footer() {
  return (
    <BackgroundCard
      style={{
        height: "20%",
      }}
    >
      <Text
        style={{
          margin: "20px",
        }}
      >
        Built with 💜 by Narayan
      </Text>
    </BackgroundCard>
  );
}

export default Footer;
