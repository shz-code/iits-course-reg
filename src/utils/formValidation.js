import { toast } from "react-hot-toast";

const formValidation = (values) => {
  const errors = {};
  const { name, email, id, phone, reason, quizzes, tc } = values;

  // ---------------------------  Quiz Validation -----------------
  // Validate if user has answered all the quizzes
  let quizSelectStatus = [];
  quizzes.map((quiz) => {
    const { options } = quiz;
    let selected = false;
    // Check if any quiz has problem
    options.filter((option) => {
      if (option.isSelected === true) selected = true;
    });
    // If any quiz is not answered push to quizSelectStatus
    if (!selected) quizSelectStatus.push("fault");
  });
  // Check if all quizzes are answered or not
  const flag = quizSelectStatus.find((state) => state === "fault");
  if (flag === "fault") {
    toast.error("Please answer all the quizzes");
    errors.quizzes = "Not all quizzes are answered";
  }
  // ------------------------- Quiz Validation -----------------
  // ------------------------- Reason Validation ---------------
  if (reason.length > 200) {
    errors.reason = `Exceeded ${reason.length - 200} character(s)`;
    toast.error("Please write your reason within 200 characters");
  }
  // ------------------------- Reason Validation ---------------
  return errors;
};

export default formValidation;
