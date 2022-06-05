import React from "react";
import Home from "./components/home/home.jsx";
import Header from "./components/header/header.jsx";
import { Route, Routes, HashRouter } from "react-router-dom";
import Error from "./components/error_component.js";
import Root from "./components/root.js";
import Test from "./components/test";
import Landing from "./components/landing";
import About from "./components/about";

function App() {
  return (
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
              <About />
            </>
          }
        />
      </Route>

      <Route path="/*" element={<Error></Error>}></Route>
    </Routes>

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
