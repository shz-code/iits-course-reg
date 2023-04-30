import React from "react";
import QuizItem from "./QuizItem";

const Quizzes = ({ quizzes }) => {
  return (
    <div>
      <p className="text-xs text-gray-500">
        Answer the following quizzes accordingly.
      </p>
      <div className="mt-2 grid gap-3">
        {quizzes.map((quiz, index) => (
          <QuizItem
            key={quiz.id}
            quiz={quiz}
            quizNumber={index}
            totalQuiz={quizzes.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
