import React, { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const Skills = ({ skillRef }) => {
  const [selectedSkill, setSelectedSkill] = useState("Programming");

  const changeSkill = (value) => {
    const val = value.key;
    setSelectedSkill(val);
  };

  const skill = {
    Programming: [
      { icon: <TbBrandCpp className="h-20 w-20" />, name: "C++" },
      { icon: <FaJava className="h-20 w-20" />, name: "Java" },
      { icon: <FaPython className="h-20 w-20" />, name: "Python" },
    ],
    "Web Development": [
      { icon: <FaHtml5 className="h-12 w-12" />, name: "HTML5" },
      { icon: <FaCss3 className="h-12 w-12" />, name: "CSS3" },
      {
        icon: <RiTailwindCssFill className="h-12 w-12" />,
        name: "Tailwind CSS",
      },
      { icon: <FaBootstrap className="h-12 w-12" />, name: "Bootstrap" },
      { icon: <SiMui className="h-12 w-12" />, name: "Material UI" },
      { icon: <IoLogoJavascript className="h-12 w-12" />, name: "JavaScript" },
      { icon: <SiFlask className="h-12 w-12" />, name: "Flask" },
      { icon: <FaReact className="h-12 w-12" />, name: "ReactJS" },
      { icon: <FaNode className="h-12 w-12" />, name: "NodeJS" },
      { icon: <SiExpress className="h-12 w-12" />, name: "ExpressJS" },
      { icon: <BiLogoSpringBoot className="h-12 w-12" />, name: "Spring Boot" },
      { icon: <DiMongodb className="h-12 w-12" />, name: "MongoDB" },
      { icon: <DiMysql className="h-12 w-12" />, name: "MySQL" },
    ],
    "Machine Learning": [
      { icon: <SiNumpy className="h-14 w-14" />, name: "Numpy" },
      { icon: <SiPandas className="h-14 w-14" />, name: "Pandas" },
      { icon: <SiScikitlearn className="h-14 w-14" />, name: "Scikit Learn" },
      { icon: <SiTensorflow className="h-14 w-14" />, name: "Tensorflow" },
      { icon: <SiPytorch className="h-14 w-14" />, name: "PyTorch" },
    ],
  };
  return (
    <div
      id="skills"
      className="font-playfair lg:h-screen lg:flex flex-wrap lg:items-center lg:justify-center sm:mt-20 max-w-full md:mt-10"
      ref={skillRef}
    >
      <div className="min-w-full">
        <h2 className="text-2xl text-textCol">Skills</h2>

        <div className="mt-10 flex">
          <div className="mr-10 flex flex-col flex-wrap">
            {Object.entries(skill).map(([key, values]) => {
              return (
                <button
                  className={`text-base text-textCol h-15 my-5 mx-auto p-3 ${
                    selectedSkill === key
                      ? "bg-slate-800 border-l-2 border-textCol"
                      : null
                  }`}
                  onClick={() => changeSkill({ key })}
                >
                  {key}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap">
            {skill[selectedSkill].map((item) => {
              return (
                <div className="flex flex-col justify-center align-middle mr-5">
                  <div className="mx-auto">{item.icon}</div>
                  <h3 className="font-semibold text-sm mt-3 mx-auto">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
