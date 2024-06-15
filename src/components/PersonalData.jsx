import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import linkedIn from "../assets/linkedIn.svg";
import github from "../assets/github.svg";
import email from "../assets/envelope.svg";
import leetcode from "../assets/leetcode.svg";

const PersonalData = ({
  scrollHandler,
  aboutRef,
  eduRef,
  expRef,
  projRef,
  skillRef,
  activeSection,
}) => {
  const [navSelect, setNavSelect] = useState({
    about: true,
    experience: false,
    projects: false,
    education: false,
    skills: false,
  });

  useEffect(() => {
    const setAllKeysToFalse = (obj) => {
      return Object.keys(obj).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
    };

    const newState = setAllKeysToFalse(navSelect);
    newState[activeSection] = true;
    setNavSelect(newState);
  }, [activeSection]);

  return (
    <div className="lg:h-5/6 m-auto">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-200 sm:text-5xl font-serif">
        Amandeep Singh
      </h1>
      <h2 className="mt-10 text-lg font-medium tracking-tight text-slate-200 sm:text-xl font-serif">
        Full Stack Developer, Competitive Programmer, Machine Learning
        Enthusiast
      </h2>

      <nav className="mt-10">
        <ul>
          <li>
            <Navitem
              content="About"
              reqId="about"
              isActive={navSelect["about"]}
              scrollHandler={scrollHandler}
              elemRef={aboutRef}
            />
          </li>
          <li>
            <Navitem
              content="Experience"
              reqId="experience"
              isActive={navSelect["experience"]}
              scrollHandler={scrollHandler}
              elemRef={expRef}
            />
          </li>
          <li>
            <Navitem
              content="Projects"
              reqId="projects"
              isActive={navSelect["projects"]}
              scrollHandler={scrollHandler}
              elemRef={projRef}
            />
          </li>
          <li>
            <Navitem
              content="Education"
              reqId="education"
              isActive={navSelect["education"]}
              scrollHandler={scrollHandler}
              elemRef={eduRef}
            />
          </li>
          <li>
            <Navitem
              content="Skills"
              reqId="skills"
              isActive={navSelect["skills"]}
              scrollHandler={scrollHandler}
              elemRef={skillRef}
            />
          </li>
        </ul>
      </nav>

      <nav className="mt-20 mx-auto flex justify-center">
        <ul className="flex">
          <li>
            <a href="https://www.linkedin.com/in/amandeepsingh285">
              <img src={linkedIn} className="h-7 w-7 mr-5" />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/Sting285/">
              <img src={leetcode} className="h-7 w-7 mr-5" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AmandeepSingh285">
              <img src={github} className="h-7 w-7 mr-5" />
            </a>
          </li>
          <li>
            <a href={`mailto:${"amandeep.singh.285@outlook.com"}`}>
              <img src={email} className="h-7 w-7 mr-5" />
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1pn6h0JM_rlID1puyjh50iQSVp_dd-AkL/view?usp=sharing">
              <div>Resume</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PersonalData;
