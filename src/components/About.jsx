import React, { useState, useEffect } from "react";

const About = ({ aboutRef }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="about"
      className={`font-playfair lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center mt-20 md:mt-10 transition-opacity ${
        isLoaded ? "animate-rotate" : ""
      }`}
      ref={aboutRef}
    >
      <div>
        <h2 className="text-2xl text-textCol">About Me</h2>
        <p className="mt-5">
          As a recent computer science graduate from NIT Karnataka, I am driven
          by curiosity and creativity to find solutions through programming. I
          have a strong foundation in C++, Python, and I enjoy solving
          challenging problems on platforms like Leetcode, where I have
          completed over 1300 questions and maintained a streak of over 740
          days.
        </p>
        <p className="mt-3">
          In addition to my experience with the MERN stack (MongoDB, Express.js,
          React.js, Node.js), I have also worked with Spring Boot to develop
          robust and efficient backend services. I have a keen interest in
          Machine Learning and have worked on several deep learning projects
          using TensorFlow and PyTorch.
        </p>
        <p className="mt-3">
          I am always eager to learn new technologies and frameworks, and to
          collaborate with others who share my passion for coding. I aspire to
          become a software engineer who can contribute to innovative and
          impactful projects that make a difference in the world. I am looking
          for opportunities to further enhance my skills and experience, and to
          work with a team that values creativity, diversity, and excellence.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-lg text-textCol">Achievements</h3>
        <ul className="list-disc">
          <li>
            Solved 1300+ Leetcode problems,maintained a 750+ day streak, and
            achieved a peak contest rating of 1723.
          </li>
          <li>
            Ranked 1028 out of 27500+ participants in Leetcode Weekly Contest
            358.
          </li>
          <li>Google Kickstart 2022 Round G rank 1472.</li>
          <li>Max Rating 1722 at CodeChef.</li>
          <li>460+ questions solved on GeeksForGeeks.</li>
          <li>AIR 1580 in JEE Mains 2020.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
