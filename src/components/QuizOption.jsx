import React, { useContext, useState } from "react";
import styles from "../assets/css/Quiz.module.css";
import quizContext from "../context/quizContext";

const QuizOption = ({ option, ind, quizNumber }) => {
  const [selected, setSelected] = useState(false);
  const { title } = option;
  const { handleQuizUpdate } = useContext(quizContext);

  const handleChange = (e) => {
    setSelected((prev) => !prev);
    handleQuizUpdate(quizNumber, ind, !selected);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      // prevent default behavior
      e.preventDefault();
      // execute the click handler
      setSelected((prev) => !prev);
      handleQuizUpdate(quizNumber, ind, !selected);
    }
  };

  return (
    <div className={`${styles.quizOption} w-full`}>
      <label
        htmlFor={`ck_${ind}_${quizNumber}`}
        className="cursor-pointer block w-full bg-slate-500 text-white hover:bg-slate-600 rounded-md px-4 py-2"
        onKeyDown={handleKeyDown}
        tabIndex="0"
        aria-label={title}
      >
        <input
          type="checkbox"
          id={`ck_${ind}_${quizNumber}`}
          checked={selected}
          onChange={handleChange}
        />
        {title}
      </label>
    </div>
  );
};

export default QuizOption;
