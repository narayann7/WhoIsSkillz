import { React, useContext, createContext, useState, useEffect } from "react";
import AppTheme from "../utility/local_storage";
const RootContext = createContext();
export const useRootContext = () => useContext(RootContext);
const RootProvider = (props) => {
  const [isDark, setisDark] = useState(true);
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
  };
  return (
    <RootContext.Provider value={value}>{props.children}</RootContext.Provider>
  );
};

export default RootProvider;
