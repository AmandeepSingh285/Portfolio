import React, { useState } from "react";

const Experience = ({ expRef }) => {
  const [company, setCompany] = useState("Arcesium India (D.E.Shaw Group)");

  const changeCompany = (value) => {
    let val = value.key;
    setCompany(val);
  };

  const exp = {
    "Arcesium India (D.E.Shaw Group)": {
      Position: "Software Development Intern",
      TimeFrame: "May 2023 - July 2023",
      workDone: [
        "Migrated the existing wires application from JSP to React Material UI achieving a 70% reduction in initial load time by transitioning from server-side rendering to client-side rendering.",
        "Through meticulous optimization, ensured that each page contained only essential JavaScript components and employed lazy loading for non-essential elements, thereby enhancing the page’s final load time by 100%.",
        "As part of an agile team, crafted 10+ RESTFul APIs for various subgroups in the wires application using Spring Boot.",
        "Developed and executed over 60 comprehensive unit and integration tests for the frontend using Jest and the React Testing Library, optimizing the application’s functionality and performance.",
        "Employed the Mockito framework and achieved 100% class coverage, enhancing API reliability and functionality through thorough backend tests.",
      ],
    },
  };
  return (
    <div
      id="experience"
      className="font-playfair lg:h-screen lg:flex lg:items-center lg:justify-center sm:mt-20"
      ref={expRef}
    >
      <div>
        <h2 className="text-2xl text-textCol">Experience</h2>

        <div className="mt-10 flex">
          <div className="mr-10 flex flex-col">
            {Object.entries(exp).map(([key, values]) => {
              return (
                <button
                  className={`text-base text-textCol h-15 my-5 mx-auto p-3 ${
                    company === key
                      ? "bg-slate-800 border-l-2 border-textCol"
                      : null
                  }`}
                  onClick={() => changeCompany({ key })}
                >
                  {key}
                </button>
              );
            })}
          </div>
          <div>
            <h3 className="font-semibold text-lg">{exp[company].Position}</h3>
            <h5 className="text-sm mb-5">{exp[company].TimeFrame}</h5>
            {exp[company].workDone.map((item) => {
              return (
                <ul className="list-disc">
                  <li>{item}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
