import React, { useState, useRef, useEffect } from "react";
import "./components/VerticalCarousel.css";

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

  const VerticalCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const carouselRef = useRef(null);
    const startYRef = useRef(0);
    const deltaYRef = useRef(0);
    const isDraggingRef = useRef(false);
    const hasDraggedRef = useRef(false);
    const isCardChangedRef = useRef(false);
  
    const updateView = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;
  
      const cardHeight = carousel.children[0].offsetHeight;
      const gap = 20; 
      const offset = (carousel.offsetHeight - cardHeight) / 2;
  
      const translateY = -(currentIndex * (cardHeight + gap)) + offset;
      carousel.style.transform = `translateY(${translateY}px)`;
    };
  
    const scrollToCard = (direction) => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next" && prevIndex < sections.length - 1) {
          return prevIndex + 1;
        } else if (direction === "prev" && prevIndex > 0) {
          return prevIndex - 1;
        }
        return prevIndex;
      });
    };
  
    useEffect(updateView, [currentIndex]);
  
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      isCardChangedRef.current = false;
      startYRef.current = e.clientY;
    };
  
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
  
      deltaYRef.current = e.clientY - startYRef.current;
  
      if (Math.abs(deltaYRef.current) > 10) {
        hasDraggedRef.current = true;
      }
    };
  
    const handleMouseUp = () => {
      if (hasDraggedRef.current && !isCardChangedRef.current) {
        if (deltaYRef.current > 10) {
          scrollToCard("prev");
        } else if (deltaYRef.current < -10) {
          scrollToCard("next");
        }
        isCardChangedRef.current = true;
      }
  
      isDraggingRef.current = false;
      hasDraggedRef.current = false;
      deltaYRef.current = 0;
    };
  
    return (
      <div
        className="carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="carousel-inner" ref={carouselRef}>
          {sections.map((section, index) => (
            <div key={section.id} className={`card ${index === currentIndex ? "active" : ""}`}>
              {section.Element}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VerticalCarousel;