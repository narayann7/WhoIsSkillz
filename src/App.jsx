import React from "react";
import Header from "./components/header/header.jsx";
import About from "./components/about/about.jsx";
import Experience from "./components/experience/experience.jsx";
import Footer from "./components/footer/footer.jsx";
import Nav from "./components/nav/nav.jsx";
import Services from "./components/services/services.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Contact from "./components/contact/contact.jsx";
function App() {
  return (
    <div class="main_div">
      <Header />
      {/* <Nav /> */}
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
