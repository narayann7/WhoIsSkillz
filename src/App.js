import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./components/error_component.js";
import Landing from "./components/landing";
import About from "./components/about";
import { ThemeProvider } from "@emotion/react";
import themes from "./utility/themes";
import { useRootContext } from "./context_api/root_context";
import Header from "./components/header.js";
import Experience from "./components/experience.js";
import Projects from "./components/projects";
import Skills from "./components/skills.js";
import Connect from "./components/connect.js";

function App() {
  const { isDark } = useRootContext();
  return (
    <ThemeProvider theme={isDark ? themes.DarkTheme : themes.LightTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Connect />
            </>
          }
        />

        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
