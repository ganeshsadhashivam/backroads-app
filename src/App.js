import React from "react";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Tours from "./componenets/Tours";
import Footer from "./componenets/Footer";
import Services from "./componenets/Services";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
