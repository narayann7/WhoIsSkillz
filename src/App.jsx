import React from "react";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Experience from "./components/experience/experience.jsx";
import Footer from "./components/footer/footer.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Header from "./components/header/header.jsx";
function App() {
  return (
    <div class="main_div">
      <Header />
      <Home />

      <About />
      <Experience />
      <Projects />

      <Contact />
      <Footer />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
