import { useState } from 'react'
import reactLogo from './assets/react.svg'

import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MyPortfolio from "./components/MyPortfolio";
import MySkills from "./components/MySkills";
import Experience from "./components/Experience";
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Experience/>
      <ContactMe />
      <Footer />
    </>
  );
}
