import "boxicons";
import { Loader2 } from "lucide-react";
import React from "react";
import Logo from "../assets/images/logo.png";
import { useGetDeadlineQuery } from "../features/api/apiSlice";
import Counter from "./Counter";

export default function Navbar() {
  const { data: deadline, isLoading, isError } = useGetDeadlineQuery();

  return (
    <header className="bg-blue-400 pb-2 shadow-md rounded-b-md">
      <div>
        <div className="page_title bg-blue-500 shadow-sm mb-1 py-1 font-bold font-mono text-lg flex items-center justify-center gap-1">
          Front-end development using
          <box-icon type="logo" color="yellow" name="javascript"></box-icon>
        </div>
      </div>
      <nav className="md:max-w-[1200px] mx-auto px-2">
        <div className="md:flex md:justify-between text-center md:items-center">
          <div className="logo hidden md:block">
            <img src={Logo} width={50} alt="CSE Logo" />
          </div>
          <div className="submission_deadline flex flex-col items-center justify-center pointer-events-none">
            <span className="font-bold"> Deadline: </span>
            {!isLoading && !isError && <Counter deadline={deadline.deadline} />}
            {isLoading && <Loader2 className="animate-spin" />}
            {!isLoading && isError && <b className="text-red-500">Error!</b>}
          </div>
        </div>
      </nav>
    </header>
  );
}
