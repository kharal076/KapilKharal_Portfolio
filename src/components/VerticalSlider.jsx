import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import MySkills from "./MySkills";
import AboutMe from "./AboutMe";
import MyPortfolio from "./MyPortfolio";
import Experience from "./Experience";
import ContactMe from "./ContactMe";


const sections = [
  {
    id: "1",
    title: "HeroSection",
    Element: <HeroSection />
  },
  {
    id: "2",
    title: "Skills",
    Element: <MySkills />
  },
  {
    id: "3",
    title: "About Me",
    Element: <AboutMe />
  },
  {
    id: "4",
    title: "Portfolio",
    Element: <MyPortfolio />
  },
  {
    id: "5",
    title: "Experience",
    Element: <Experience/>
  },
  {
    id: "6",
    title: "Contact Me",
    Element: <ContactMe />
  },
];

export default function VerticalSlider() {
    return (
      <div className="vertical-slider">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="section"
            style={{ backgroundColor: section.bgColor}}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {section.Element}
          </motion.section>
        ))}
      </div>)}
