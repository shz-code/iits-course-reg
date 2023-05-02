import { CheckCircle, X, XCircle } from "lucide-react";
import React from "react";

const SubmitModal = ({ setShowModal, modalData }) => {
  const { totalQuiz, rightAns, flag } = modalData;

  const marks = parseInt((rightAns / totalQuiz) * 100);

  const handleModalCLose = () => {
    setShowModal(false);
    window.location.reload();
  };

  let content = null;
  if (flag)
    content = (
      <>
        Your registration form submission is rejected. <br />
        Please practice more to get better knowledge of HTML & CSS. You can
        again submit the form later with better quiz performance. <br />
      </>
    );
  else
    content = (
      <>
        Your registration form submission is complete. <br />
        You will receive confirmation email from us if you are selected for the
        course. <br /> <span className="text-green-500">Thanks.</span>
      </>
    );

  return (
    <div className="bg-slate-950/50 top-0 left-0 h-full w-full fixed flex justify-center items-center z-50 px-2">
      <div className="rounded-md bg-slate-100 p-5">
        <div
          className="close-modal flex justify-end"
          onClick={handleModalCLose}
        >
          <XCircle size="30" className="cursor-pointer" />
        </div>
        <div className="visual-status flex justify-center py-2">
          {flag ? (
            <X size="100" color="#f43f5e" />
          ) : (
            <CheckCircle size="100" color="#22c55e" />
          )}
        </div>
        <div className="details-status mt-4 text-center grid gap-2 w-3/4 mx-auto">
          <p className="font-medium">{content}</p>
          <p className={`text-slate-500`}>
            Quiz Result {rightAns} / {totalQuiz} <br />{" "}
            <span>{marks}% Marks</span>
          </p>
          <p className="text-xs">
            <span className="font-medium">Remarks: </span>{" "}
            <span
              className={`${
                marks > 75
                  ? "text-green-500"
                  : marks > 50
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {marks > 75
                ? "Satisfactory"
                : marks > 50
                ? "Good"
                : "Need Improvement"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
