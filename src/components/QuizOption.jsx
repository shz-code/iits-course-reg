import React from "react";
import styles from "../assets/css/Quiz.module.css";

const QuizOption = ({ option, ind, quizNumber }) => {
  const { title } = option;

  return (
    <div className={`${styles.quizOption} w-full`}>
      <label
        htmlFor={`ck_${ind}_${quizNumber}`}
        className="cursor-pointer block w-full bg-slate-500 text-white hover:bg-slate-600 rounded-md px-4 py-2"
      >
        <input type="checkbox" id={`ck_${ind}_${quizNumber}`} />
        {title}
      </label>
    </div>
  );
};

export default QuizOption;
