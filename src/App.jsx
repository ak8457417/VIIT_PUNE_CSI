import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import CustomizedTimeline from "./Components/Timeline/Timeline.jsx";
import Prizes from "./Components/Prizes/Prizes.jsx";
import Sponsor from "./Components/Sponsor/Sponsor.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Social from "./Components/Social/Social.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <CustomizedTimeline />
        <Prizes />
        <Sponsor />
        <Gallery />
        <Social />
        <Footer />
    </>
  )
}

export default App
