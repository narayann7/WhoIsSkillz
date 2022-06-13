import { React, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "./components/error_component.js";
import Root from "./components/root.js";
import Landing from "./components/landing";
import About from "./components/about";
import { ThemeProvider } from "@emotion/react";
import themes from "./utility/themes";
import { useRootContext } from "./context_api/root_context";
import Header from "./components/header.js";
import Experience from "./components/experience.js";
import Projects from "./components/projects";

function App() {
  const { isDark } = useRootContext();

  useEffect(() => {}, []);
  return (
    <ThemeProvider theme={isDark ? themes.DarkTheme : themes.LightTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/who-is-skillz" />} />
        <Route
          path="/whoisNarayan"
          element={
            <>
              <Header />
              <Landing />
              <About />
              <Experience />
              <Projects />
            </>
          }
        />

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
