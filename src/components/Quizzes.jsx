import React from "react";
import QuizItem from "./QuizItem";

const Quizzes = () => {
  const quizzes = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        {
          id: 1,
          title: "Hypertext Machine language",
          isCorrect: false,
        },
        {
          id: 2,
          title: "Hypertext and links markup language",
          isCorrect: false,
        },
        {
          id: 3,
          title: "Hypertext Markup Language",
          isCorrect: true,
        },
        {
          id: 4,
          title: "Hightext machine language",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does HTML stand for?",
      options: [
        {
          id: 1,
          title: "Hypertext Machine language",
          isCorrect: false,
        },
        {
          id: 2,
          title: "Hypertext and links markup language",
          isCorrect: false,
        },
        {
          id: 3,
          title: "Hypertext Markup Language",
          isCorrect: true,
        },
        {
          id: 4,
          title: "Hightext machine language",
          isCorrect: false,
        },
      ],
    },
  ];

  let content = null;

  if (quizzes.length) {
    content = quizzes.map((quiz, index) => (
      <QuizItem
        key={quiz.id}
        quiz={quiz}
        quizNumber={index}
        totalQuiz={quizzes.length}
      />
    ));
  }

  return (
    <div>
      <p className="text-xs text-gray-500">
        Answer the following quizzes accordingly.
      </p>
      <div className="mt-2 grid gap-3">{content}</div>
    </div>
  );
};

export default Quizzes;
