import React from "react";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Experience from "./components/experience/experience.jsx";
import Footer from "./components/footer/footer.jsx";
import Projects from "./components/projects/projects.jsx";
import Nav from "./components/nav/nav.jsx";
import Contact from "./components/contact/contact.jsx";
function App() {
  return (
    <div class="main_div">
      <Home  />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
