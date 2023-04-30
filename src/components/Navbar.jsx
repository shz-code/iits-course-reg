import "boxicons";
import React from "react";
import Counter from "./Counter";

export default function Navbar() {
  return (
    <header className="bg-blue-400 pb-2 shadow-md rounded-b-md">
      <div>
        <div className="page_title bg-blue-500 shadow-sm mb-1 py-1 font-bold font-mono text-lg flex items-center justify-center gap-1">
          Front-end development with
          <box-icon type="logo" color="yellow" name="javascript"></box-icon>
        </div>
      </div>
      <nav className="md:container mx-auto">
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
            <span className="font-bold"> Deadline: </span> <Counter />
          </div>
        </div>
      </nav>
    </header>
  );
}
