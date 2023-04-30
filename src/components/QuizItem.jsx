import { HelpCircle } from "lucide-react";
import React from "react";
import QuizOption from "./QuizOption";

const QuizItem = () => {
  return (
    <div className="quiz bg-slate-100 px-3 py-3 rounded-md">
      <p className="text-sm mb-2 text-gray-500">Quiz 1 / 5</p>
      <div className="quiz-question flex gap-1 items-center">
        <HelpCircle size="20" /> What is Html
      </div>
      <div className=" mt-4 bg-slate-300 p-4 rounded-md">
        <p className="text-xs">There can be multiple answers of quiz.</p>
        <div className="quiz-options grid md:grid-cols-2 gap-2 mt-2">
          <QuizOption />
          <QuizOption />
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
