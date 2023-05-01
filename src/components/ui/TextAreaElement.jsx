import React from "react";

const TextAreaElement = ({ label, wordCount, ...rest }) => {
  return (
    <div className="input-group my-2">
      <label htmlFor={label} className="mb-2 text-sm cursor-pointer">
        {label}
      </label>
      <textarea
        name={label}
        id={label}
        className={`w-full bg-slate-100 rounded-md shadow-sm p-2 text-sm h-32 mt-1 ${
          wordCount > 200 && "focus:outline-red-500"
        }`}
        {...rest}
      ></textarea>
      <div className="flex justify-end">
        <span className={`text-xs ${wordCount > 200 && "text-red-500"}`}>
          {wordCount} / 200
        </span>
      </div>
    </div>
  );
};

export default TextAreaElement;
