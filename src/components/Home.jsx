import React, { useEffect, useRef, useState } from "react";
import PersonalData from "./PersonalData";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef();
  const eduRef = useRef();
  const expRef = useRef();
  const projRef = useRef();
  const skillRef = useRef();

  const sections = [
    { id: "about", ref: aboutRef },
    { id: "education", ref: eduRef },
    { id: "experience", ref: expRef },
    { id: "projects", ref: projRef },
    { id: "skills", ref: skillRef },
  ];

  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    const observers = sections.map(({ id, ref }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="animate-fadeIn h-full p-10 min-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
        <div className="lg:col-span-2 lg:h-full lg:p-5 lg:top-0 lg:align-middle lg:flex lg:flex-col">
          <div className="lg:sticky lg:top-44">
            <PersonalData
              scrollHandler={scrollHandler}
              aboutRef={aboutRef}
              eduRef={eduRef}
              expRef={expRef}
              projRef={projRef}
              skillRef={skillRef}
              activeSection={activeSection}
            />
          </div>
        </div>
        <div className="lg:col-span-3 lg:h-full">
          <About aboutRef={aboutRef} />
          <Experience expRef={expRef} />
          <Projects projRef={projRef} />
          <Education eduRef={eduRef} />
          <Skills skillRef={skillRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
