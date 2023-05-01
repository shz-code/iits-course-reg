import _ from "lodash";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import quizContext from "../context/quizContext";
import { useGetQuizzesQuery } from "../features/api/apiSlice";
import { setValidation } from "../features/submitValidation/submitValidationSlice";
import QuizItem from "./QuizItem";

const Quizzes = ({ formik }) => {
  const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
  const dispatch = useDispatch();

  // Initialize form data using Api Response
  const initializeState = (quizzes) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes.map((quiz) => {
      const { options } = quiz;
      options.map((option) => (option.isSelected = false));
    });
    formik.values.quizzes = modQuizzes;
  };

  // Watch for successful data fetch from server
  useEffect(() => {
    if (!isLoading && !isError) {
      initializeState(quizzes);
    }
  }, [isLoading, quizzes, isError]);

  // Watch for data fetch error
  useEffect(() => {
    if (isError) {
      toast.error("Server error please reload.");
      dispatch(setValidation(false));
    }
  }, [isError]);

  const handleQuizUpdate = (quizNumber, optionNumber, action) => {
    const modQuizzes = _.cloneDeep(formik.values.quizzes);
    modQuizzes[quizNumber].options[optionNumber].isSelected = action;
    formik.values.quizzes = modQuizzes;
  };

  // Decide what to show
  let content = null;
  if (isLoading) {
    content = (
      <div className="flex justify-center my-2">
        <Loader2 className="animate-spin" size="50" color="gray" />
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <p className="bg-red-500 p-3 rounded-md text-white my-2">
        Failed to fetch quizzes for you! Please reload the page.
      </p>
    );
  } else if (!isLoading && !isError && quizzes.length) {
    content = quizzes?.map((quiz, index) => (
      <QuizItem
        key={quiz.id}
        quiz={quiz}
        quizNumber={index}
        totalQuiz={quizzes.length}
      />
    ));
  }
  return (
    <>
      <h1 className="text-center font-bold">Quiz</h1>
      <div>
        <p className="text-xs text-gray-500">
          Answer the following quizzes accordingly.
        </p>
        <div className="mt-2 grid gap-3">
          <quizContext.Provider value={{ handleQuizUpdate }}>
            {content}
          </quizContext.Provider>
        </div>
        <p className="text-red-500 font-bold my-2 text-center">
          {formik.errors?.quizzes}
        </p>
      </div>
    </>
  );
};

export default Quizzes;
