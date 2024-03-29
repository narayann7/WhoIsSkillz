import { useMediaQuery } from "@mui/material";
import { React, useContext, createContext, useState, useEffect } from "react";
import AppTheme from "../utility/local_storage";
const RootContext = createContext();
export const useRootContext = () => useContext(RootContext);
const RootProvider = (props) => {
  const [isDark, setisDark] = useState(true);
  const [getScrollHeight, setScrollHeight] = useState(0);
  const [showResume, setShowResume] = useState(false);

  const Mq = {
    esm: useMediaQuery("(min-width:400px)"),
    sm: useMediaQuery("(max-width:600px)"),
    bsm: useMediaQuery("(max-width:730px)"),
    md: useMediaQuery("(max-width:1000px)"),
    lg: useMediaQuery("(min-width:900px)"),
  };
  const switchTheme = () => {
    AppTheme.switchTheme();
    setisDark(AppTheme.isDark());
  };
  useEffect(() => {
    AppTheme.getTheme();
  }, []);

  const value = {
    isDark,
    setisDark,
    switchTheme,
    getScrollHeight,
    showResume,
    setShowResume,
    setScrollHeight,
    Mq,
  };
  return (
    <RootContext.Provider value={value}>{props.children}</RootContext.Provider>
  );
};

export default RootProvider;
