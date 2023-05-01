import { Loader2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const Button = ({ isValid, isLoading }) => {
  const { status } = useSelector((state) => state.submitValidation);

  return (
    <button
      type="submit"
      className="w-full bg-blue-950 rounded py-2 mt-3 text-white active:scale-95
focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
disabled:scale-100 disabled:pointer-events-none disabled:opacity-75"
      disabled={!isValid || !status || isLoading}
    >
      {isLoading && <Loader2 className="animate-spin inline mr-2" size={20} />}
      Submit
    </button>
  );
};

export default Button;
