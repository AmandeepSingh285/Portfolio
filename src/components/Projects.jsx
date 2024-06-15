import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";

const Projects = ({ projRef }) => {
  const [project, setProject] = useState("Sociobook");

  const changeProject = (value) => {
    let val = value.key;
    setProject(val);
  };

  const proj = {
    Sociobook: {
      TimeFrame: "April 2024 - May 2024",
      TechStack: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
      ],
      Link: "https://github.com/AmandeepSingh285/Sociobook",
      About: "Full Stack Web Development",
      workDone: [
        `Built a full-stack web platform that fosters community interaction and
      knowledge exchange through features such as Q&A and discussion threads.`,
        `Engineered 16 robust APIs, improving the applications functionality and user
      experience.`,
        `Incorporated JWT for user authentication, ensuring platform security and
      privacy.`,
      ],
    },
    "Lung Disease Detection": {
      TimeFrame: "Nov 2021 - May 2022",
      TechStack: [
        "Numpy",
        "Matplotlib",
        "Pandas",
        "Tensorflow",
        "Keras",
        "Scikit Learn",
        "Flask",
      ],
      Link: "https://github.com/AmandeepSingh285/Lung-Disease-Detection",
      About: "Deep Learning, Computer Vision",
      workDone: [
        `Formulated a deep learning model predicting lung diseases using chest X-ray
images.`,
        `Employed AlexNet, VGG-16, Inception Net and MobileNet architectures for
model implementation.`,
        `Developed a Flask-based website enabling users to upload an image of a lung
and select the prediction model for pneumonia detection.`,
        `Achieved accuracies of 88% with AlexNet and VGG16, and 79% and 75% with
MobileNet and Inception Net.`,
      ],
    },
  };

  return (
    <div
      id="projects"
      className="font-playfair lg:h-screen lg:flex flex-wrap lg:items-center lg:justify-center mt-20 max-w-full md:mt-10"
      ref={projRef}
    >
      <div>
        <h2 className="text-2xl text-textCol">Projects</h2>

        <div className="mt-10 flex">
          <div className="mr-10 flex flex-col flex-wrap">
            {Object.entries(proj).map(([key, values]) => {
              return (
                <button
                  className={`text-base text-textCol h-15 my-5 mx-auto p-3 ${
                    project === key
                      ? "bg-slate-800 border-l-2 border-textCol"
                      : null
                  }`}
                  onClick={() => changeProject({ key })}
                >
                  {key}
                </button>
              );
            })}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-5">
              {proj[project].About}
            </h3>
            <div className="flex flex-wrap">
              <h3 className="font-semibold text-sm mr-5">Tech Stack: </h3>
              {proj[project].TechStack.map((item) => {
                return (
                  <>
                    <h3 className="font-semibold text-sm mr-3">{item}</h3>
                    <h3 className="font-semibold text-sm mr-2">|</h3>
                  </>
                );
              })}
            </div>
            <h5 className="text-sm my-5">{proj[project].TimeFrame}</h5>
            {proj[project].workDone.map((item) => {
              return (
                <ul className="list-disc">
                  <li>{item}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="mt-6 flex justify-end flex-wrap">
          <a href={proj[project].Link}>
            <div className="h-7 w-7 mr-3">
              <FaGithub className="h-7 w-7" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
