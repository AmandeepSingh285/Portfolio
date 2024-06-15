import React, { useState, useEffect } from "react";

const Education = ({ eduRef }) => {
  const [edu, setEdu] = useState("Bachelors");

  const changeEducation = (value) => {
    const val = value.key;
    setEdu(val);
  };

  const education = {
    Bachelors: {
      Institute: "National Institute of Technology Karnataka, Surathkal",
      Course: "B.Tech - Computer Science and Engineering",
      TimeFrame: "Nov 2020 - May 2024",
      Grade: "8.8 CGPA",
      CourseWork: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Object Oriented Programming",
        "Computer Networks",
        "Machine Learning",
        "Web Development",
      ],
    },
    AISSCE: {
      Institute: "Delhi Public School Bangalore, East",
      Course: "Class 12 - CBSE",
      TimeFrame: "May 2018 - May 2019",
      Grade: "92%",
      CourseWork: [],
    },
  };
  return (
    <div
      id="education"
      className={`font-playfair lg:h-screen lg:flex flex-wrap lg:items-center lg:justify-center mt-20 md:mt-10 max-w-full`}
      ref={eduRef}
    >
      <div className="min-w-full">
        <h2 className="text-2xl text-textCol">Education</h2>
        <div className="mt-10 flex">
          <div className="mr-10 flex flex-col flex-wrap">
            {Object.entries(education).map(([key, values]) => {
              return (
                <button
                  className={`text-base text-textCol h-15 my-5 md:mx-auto p-3 ${
                    edu === key
                      ? "bg-slate-800 border-l-2 border-textCol"
                      : null
                  }`}
                  onClick={() => changeEducation({ key })}
                >
                  {key}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col flex-wrap">
            <h3 className="font-semibold text-lg mb-5">
              {education[edu].Institute}
            </h3>
            <h3>{education[edu].Course}</h3>
            <h5 className="text-sm my-3">{education[edu].TimeFrame}</h5>
            <h3>Grade: {education[edu].Grade}</h3>
            {education[edu].CourseWork.length > 0 ? (
              <h3 className="my-5">Coursework: </h3>
            ) : null}
            <div className="flex flex-col md:justify-center md:align-middle flex-wrap">
              {education[edu].CourseWork.length > 0 &&
                education[edu].CourseWork.map((item) => {
                  return <h3 className="md:m-auto font-light my-1">{item}</h3>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
