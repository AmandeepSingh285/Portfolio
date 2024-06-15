import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

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
              <div className="mr-5">
                <FaLinkedinIn className="h-7 w-7" />
              </div>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/Sting285/">
              <div className="h-7 w-7 mr-5">
                <SiLeetcode className="h-7 w-7" />
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/AmandeepSingh285">
              <div className="h-7 w-7 mr-5">
                <FaGithub className="h-7 w-7" />
              </div>
            </a>
          </li>
          <li>
            <a href={`mailto:${"amandeep.singh.285@outlook.com"}`}>
              <div className="h-7 w-7 mr-5">
                <MdEmail className="h-7 w-7" />
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/user/mailtoamandeepsingh28/">
              <div className="h-7 w-7 mr-5">
                <SiGeeksforgeeks className="h-7 w-7" />
              </div>
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
