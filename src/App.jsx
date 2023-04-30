import { useFormik } from "formik";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useGetQuizzesQuery } from "./api/apiSlice";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quizzes from "./components/Quizzes";
import Terms from "./components/Terms";
import UserForm from "./components/UserForm";

function App() {
  const [show, setShow] = useState(false);
  const { data: quizzes, isLoading, isError, error } = useGetQuizzesQuery();

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
    validate: (values) => {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Initialize form data using Api Response
  const initializeState = (quizzes) => {
    const modQuizzes = _.cloneDeep(quizzes);
    modQuizzes.map((quiz) => (quiz.isSelected = false));
    formik.values.quizzes = modQuizzes;
    setShow(true);
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      initializeState(quizzes);
    }
  }, [isLoading, quizzes, isError]);

  useEffect(() => {}, [formik.values.quizzes]);

  return (
    <div>
      <Navbar />
      <div className="main py-4 px-2 md:max-w-[900px] mx-auto ">
        <div className="bg-rose-100 rounded-md text-center">
          <p className="font-bold font-mono mb-2 py-4 w-3/4 mx-auto">
            Fill up the form within deadline for primary registration. Once the
            deadline is finished you can not apply for registration.
          </p>
        </div>
        <section className="meta-information">
          <h1 className="text-lg text-center font-bold">About This Course</h1>
          <CourseDetails />
        </section>
        <form onSubmit={formik.handleSubmit}>
          <section className="user-registration mt-3">
            <h1 className="text-lg text-center font-bold">User Information</h1>
            <UserForm formik={formik} />
          </section>
          <section className="quizzes mt-3">
            <h1 className="text-lg text-center font-bold">Quiz</h1>
            {show && <Quizzes quizzes={formik.values.quizzes} />}
          </section>
          <section className="terms-and-conditions mt-3 ">
            <h1 className="text-lg text-center font-bold">
              Terms and Conditions
            </h1>
            <Terms formik={formik} />
          </section>
          <button
            type="submit"
            className="w-full bg-blue-950 rounded py-1 mt-3 text-white active:scale-95
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            disabled:scale-100 disabled:pointer-events-none disabled:opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
