import React from "react";

const CourseDetails = () => {
  return (
    <>
      <h1 className="text-center font-bold">About This Course</h1>
      <div className="bg-slate-100 p-3 rounded-md text-slate-600">
        <p className="font-bold font-mono text-blue-950 py-2">
          This course is arranged by IUBAT IT Society on behalf of CSE
          Department of IUBAT.
        </p>
        <p>
          <span className="font-medium text-black">Course name:</span> Front-end
          development using JavaScript with Intermediate concepts.
        </p>
        <p>
          <span className="font-medium text-black">Course duration:</span> 1.5
          Months
        </p>
        <p>
          <span className="font-medium text-black">Course outline:</span>{" "}
          <a href="/" target="_blank" className="text-blue-500 underline">
            Check course outline
          </a>
        </p>
        <p>
          <span className="font-medium text-black">Course schedule:</span> Every
          Saturday & Wednesday (Lab 3)
        </p>
      </div>
    </>
  );
};

export default CourseDetails;
