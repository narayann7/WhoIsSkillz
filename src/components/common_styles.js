import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const BackgroundCard = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px",
  backgroundColor: theme.palette.background.default,
}));

const CenterCardLanding = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "64%",
  display: "flex",
  justifyContent: "center",

  flexDirection: "column",
}));
const CenterCard = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "64%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Sen",
  color: theme.palette.text.primary,
}));
const Text2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Sen",
  color: theme.palette.text.secondary,
}));

const common_styles = {
  BackgroundCard,
  CenterCard,
  Text,
  Text2,
  CenterCardLanding,
};

export default common_styles;
