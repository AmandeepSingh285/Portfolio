import React from "react";

const Navitem = ({ content, reqId, isActive, scrollHandler, elemRef }) => {
  const styleInfo = {
    about: {
      notActive: "w-10",
      active: "w-20",
    },
    experience: {
      notActive: "w-5",
      active: "w-12",
    },
    projects: {
      notActive: "w-9",
      active: "w-16",
    },
    education: {
      notActive: "w-5",
      active: "w-10",
    },
    skills: {
      notActive: "w-12",
      active: "w-20",
    },
  };

  return (
    <button
      className="flex mt-2"
      onClick={(event) => {
        scrollHandler(elemRef);
      }}
    >
      <hr
        className={`h-px my-auto hover:w-20 ${
          isActive ? styleInfo[reqId]["active"] : styleInfo[reqId]["notActive"]
        } `}
      ></hr>
      <div className={`ml-2 ${isActive ? "text-textCol" : null}`}>
        {content}
      </div>
    </button>
  );
};

export default Navitem;
