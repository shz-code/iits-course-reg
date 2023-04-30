import { HelpCircle } from "lucide-react";
import React from "react";
import QuizOption from "./QuizOption";

const QuizItem = ({ quiz, quizNumber, totalQuiz }) => {
  const { question, options } = quiz;

  return (
    <div className="quiz bg-slate-100 px-3 py-3 rounded-md">
      <p className="text-sm mb-2 text-gray-500">
        Quiz {quizNumber + 1} / {totalQuiz}
      </p>
      <div className="quiz-question flex gap-1 items-center">
        <HelpCircle size="20" /> {question}
      </div>
      <div className=" mt-4 bg-slate-300 p-4 rounded-md">
        <p className="text-xs">There can be multiple answers of quiz.</p>
        <div className="quiz-options grid md:grid-cols-2 gap-2 mt-2">
          {options.map((option, index) => (
            <QuizOption
              key={option.id}
              option={option}
              ind={index}
              quizNumber={quizNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
