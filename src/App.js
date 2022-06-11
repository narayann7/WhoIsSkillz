import { React, useEffect } from "react";
import Home from "./components/home/home.jsx";
import Header from "./components/header/header.jsx";
import { Route, Routes } from "react-router-dom";
import Error from "./components/error_component.js";
import Root from "./components/root.js";
import Test from "./components/test";
import Landing from "./components/landing";
import About from "./components/about";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import themes from "./utility/themes";
import AppTheme from "./utility/local_storage.js";
import { useRootContext } from "./context_api/root_context";

function App() {
  const { isDark } = useRootContext();

  useEffect(() => {
  }, []);
  return (
    <ThemeProvider theme={isDark ? themes.DarkTheme : themes.LightTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Root />
            </>
          }
        >
          <Route
            path="/"
            element={
              <>
                <Landing />
                {/* <About />
                <Test /> */}
              </>
            }
          />
        </Route>

        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </ThemeProvider>

    // <div class="main_div">
    //   <Header />
    //   <Home />

    //   {/* <About />
    //   <Experience />
    //   <Projects />

    //   <Contact />
    //   <Footer />
    //   <Experience />
    //   <Projects />
    //   <Contact />
    //   <Footer /> */}
    // </div>
  );
}

export default App;
