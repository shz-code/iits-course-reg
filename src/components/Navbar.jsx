import "boxicons";
import { Loader2 } from "lucide-react";
import React from "react";
import { useGetDeadlineQuery } from "../features/api/apiSlice";
import Counter from "./Counter";

export default function Navbar() {
  const { data: deadline, isLoading, isError } = useGetDeadlineQuery();

  return (
    <header className="bg-blue-400 pb-2 shadow-md rounded-b-md">
      <div>
        <div className="page_title bg-blue-500 shadow-sm mb-1 py-1 font-bold font-mono text-lg flex items-center justify-center gap-1">
          Front-end development with
          <box-icon type="logo" color="yellow" name="javascript"></box-icon>
        </div>
      </div>
      <nav className="md:max-w-[1200px] mx-auto px-2">
        <div className="md:flex md:justify-between text-center md:items-center">
          <div className="logo hidden md:block">
            <a href="http://cse.iubat.edu/" target="_blank">
              <img
                src="https://th.bing.com/th/id/R.9022450cb9bd5c25aa83792341c1d93e?rik=pyPsMUjo7%2fTeLg&riu=http%3a%2f%2fcse.iubat.edu%2fwp-content%2fuploads%2f2019%2f06%2fiubat_cse-logo.png&ehk=EDxgn3M75GwbAI3b1Fwn7FLCfXN4NLEy3HGYtpFFQO8%3d&risl=&pid=ImgRaw&r=0"
                width={50}
                alt="CSE Logo"
              />
            </a>
          </div>
          <div className="submission_deadline">
            <span className="font-bold"> Deadline: </span>{" "}
            {!isLoading && !isError && <Counter deadline={deadline.deadline} />}
            {isLoading && <Loader2 className="animate-spin" />}
            {!isLoading && isError && <b className="text-red-500">Error!</b>}
          </div>
        </div>
      </nav>
    </header>
  );
}
