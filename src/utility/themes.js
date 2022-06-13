import { createTheme } from "@mui/material/styles";
const DarkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#6EB69D",
      light: "#D1EEE4",
      dark: "#469a7c",
    },
    secondary: {
      main: "#e8b833",
      light: "#ffcb60",
      dark: "#f1a50a",
    },
    background: {
      default: "#060608",
      paper: "#102027",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a7a7a7",
      disabled: "#9c9c9c",
    },
    info: {
      main: "#FDE8E9",
    },
    warning: {
      main: "#1F2232",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 500,
      lg: 900,
      xl: 1536,
    },
  },
});
const LightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#035a69",
      light: "#006775",
      dark: "#013f48",
    },
    secondary: {
      main: "#e8b833",
      light: "#ffcb60",
      dark: "#f1a50a",
    },
    background: {
      default: "#cbcbcb",
      paper: "#9ebfb4",
    },
    text: {
      secondary: "#000000",
      primary: "#000000",
      disabled: "#3a3a3a",
      hint: "#757575",
    },
    info: {
      main: "#FDE8E9",
    },
    warning: {
      main: "#1F2232",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 500,
      lg: 900,
      xl: 1536,
    },
  },
});

const themes = {
  DarkTheme,
  LightTheme,
};

export default themes;
