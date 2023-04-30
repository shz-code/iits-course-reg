import React from "react";
import QuizItem from "./QuizItem";

const Quizzes = () => {
  return (
    <div>
      <p className="text-xs text-gray-500">
        Answer the following quizzes accordingly.
      </p>
      <div className="mt-2 grid gap-3">
        <QuizItem />
        <QuizItem />
      </div>
    </div>
  );
};

export default Quizzes;
