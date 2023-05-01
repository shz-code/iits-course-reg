import { useFormik } from "formik";
import { useSelector } from "react-redux";
import formValidation from "../utils/formValidation";
import CourseDetails from "./CourseDetails";
import Quizzes from "./Quizzes";
import Terms from "./Terms";
import UserForm from "./UserForm";
import Button from "./ui/Button";

const MainBody = () => {
  const { finished } = useSelector((state) => state.submitValidation);

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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { name, email, id, phone, reason, tc } = formik.values;
  const isValidCheck = () => {
    if (!name || !email || !id || !phone || !reason || !tc) return false;
    return true;
  };

  return (
    <div className="main py-4 px-2 md:max-w-[900px] mx-auto grid gap-4">
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
          <Button isValid />
          {/* isValid={isValidCheck()} isLoading={false} */}
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
