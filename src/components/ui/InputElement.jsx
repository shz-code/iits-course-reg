import React from "react";

const InputElement = ({ icon, label, ...rest }) => {
  return (
    <div className="input-group my-2">
      <label htmlFor={label} className="mb-2 text-sm cursor-pointer">
        {label}
      </label>
      <div className="relative shadow-sm mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none bg-blue-950 rounded-s-md">
          {icon}
        </div>
        <input
          className="px-2 rounded bg-slate-100 w-full py-1 pl-11 text-md placeholder:opacity-75 placeholder:text-stone-400 placeholder:text-sm"
          {...rest}
          id={label}
        />
      </div>
    </div>
  );
};

export default InputElement;
