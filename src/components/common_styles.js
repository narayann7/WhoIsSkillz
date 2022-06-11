import styled from "@emotion/styled";
import { Card, Box, Typography } from "@mui/material";

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

const CenterCard = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  height: "100%",
  width: "64%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  color: theme.palette.text.primary,
}));
const common_styles = {
  BackgroundCard,
  CenterCard,
  Text
};

export default common_styles;
