import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import CourseDetails from "./CourseDetails";
import Quizzes from "./Quizzes";
import Terms from "./Terms";
import UserForm from "./UserForm";
import Button from "./ui/Button";

const MainBody = () => {
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
    validate: (values) => {
      const errors = {};
      const { name, email, id, phone, reason, quizzes, tc } = values;

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
        errors.quizzes = "Not all quizzes are selected";
      }
      return errors;
    },
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
      <form onSubmit={formik.handleSubmit}>
        <section className="user-registration">
          <UserForm formik={formik} />
        </section>
        <section className="quizzes mt-3">
          <Quizzes formik={formik} />
          <p className="text-red-500 font-bold my-2 text-center">
            {formik.errors?.quizzes}
          </p>
        </section>
        <section className="terms-and-conditions">
          <Terms formik={formik} />
        </section>
        <Button isValid />
        {/* isValid={isValidCheck()} isLoading={false} */}
      </form>
    </div>
  );
};

export default MainBody;
