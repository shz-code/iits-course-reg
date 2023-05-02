import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  useSubmitFormMutation,
  useSubmitQuizMutation,
} from "../features/api/apiSlice";
import formValidation from "../utils/formValidation";
import CourseDetails from "./CourseDetails";
import Quizzes from "./Quizzes";
import Terms from "./Terms";
import UserForm from "./UserForm";
import Button from "./ui/Button";
import SubmitModal from "./ui/submitModal";

const MainBody = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const { finished } = useSelector((state) => state.submitValidation);

  const [
    submitQuiz,
    { isSuccess, isError: submitQuizError, isLoading: submitQuizLoading },
  ] = useSubmitQuizMutation();

  const [
    submitForm,
    { isError: submitFormError, isLoading: submitFormLoading },
  ] = useSubmitFormMutation();

  // Form submit handler
  const formSubmitHandler = async (values) => {
    // Submit client quiz to backend to validate
    const { data } = await submitQuiz(values.quizzes);
    // If server response id 200
    if (data.status === 200) {
      const { totalQuiz, rightAns } = data;
      // Students with more than 20% marks are only allowed to register
      if (parseInt((rightAns / totalQuiz) * 100) > 20) {
        const { name, email, id, phone, reason } = values;
        // Submit registration form with quiz performance
        const { data: res } = await submitForm({
          name: name,
          email: email,
          studentId: id,
          phone: phone,
          reason: reason,
          rightAns: rightAns,
          totalQuiz: totalQuiz,
        });
        // If response if 200
        if (res.status === 200) {
          setShowModal(true);
          setModalData({ ...data, flag: false });
        }
        // Check if student credentials already exists
        else if (res.status === 403) {
          if (res.msg === "phone_copy") {
            toast.error("Phone number already used. Try with different number");
          }
          // Check if student credentials already exists
          else if (res.msg === "studentId_copy") {
            toast.error("Student Id already used");
          }
          // Check if student credentials already exists
          else if (res.msg === "email_copy") {
            toast.error("Email already used. Try with different email");
          }
        }
      } else {
        setShowModal(true);
        setModalData({ ...data, flag: true });
      }
    }
  };

  // Form state
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      id: "",
      phone: "",
      reason: "",
      quizzes: [],
      tc: false,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: formValidation,
    onSubmit: formSubmitHandler,
  });

  useEffect(() => {
    if (submitQuizError || submitFormError)
      toast.error("Error fetching data. Please try again!");
  }, [submitQuizError, submitFormError]);

  const { name, email, id, phone, reason, tc } = formik.values;
  const isValidCheck = () => {
    if (!name || !email || !id || !phone || !reason || !tc) return false;
    return true;
  };

  return (
    <div className="main py-4 px-2 md:max-w-[900px] mx-auto grid gap-4">
      {/* Modal */}
      {showModal && (
        <SubmitModal setShowModal={setShowModal} modalData={modalData} />
      )}
      <div className="bg-rose-100 rounded-md text-center">
        <p className="font-bold font-mono mb-2 py-4 w-3/4 mx-auto">
          Fill up the form within deadline for primary registration. Once the
          deadline is finished you can not apply for registration.
        </p>
      </div>
      <section className="meta-information">
        <CourseDetails />
      </section>
      {!finished ? (
        <form onSubmit={formik.handleSubmit}>
          <section className="user-registration">
            <UserForm formik={formik} />
          </section>
          <section className="quizzes mt-3">
            <Quizzes formik={formik} />
          </section>
          <section className="terms-and-conditions">
            <Terms formik={formik} />
          </section>
          {/* <Button isValid /> */}
          <Button
            isValid={isValidCheck()}
            isLoading={submitQuizLoading || submitFormLoading}
          />
        </form>
      ) : (
        <p className="bg-red-500 text-white p-3 rounded-md text-center">
          Registration deadline already finished. <br />
          Contact with department for any consultation. <br />
          Thanks for your co-operation.
        </p>
      )}
    </div>
  );
};

export default MainBody;
