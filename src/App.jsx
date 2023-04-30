import { useFormik } from "formik";
import { useEffect, useReducer } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quizzes from "./components/Quizzes";
import Terms from "./components/Terms";
import UserForm from "./components/UserForm";

const reducer = (state, action) => {
  switch (action.type) {
    case "mod":
      return state;
    case "check":
      return state;
    default:
      return state;
  }
};

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      id: "",
      phone: "",
      quizzes: [],
      tc: false,
    },
    validate: (values) => {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [res, dispatch] = useReducer(reducer, formik.values);

  useEffect(() => {
    // formik.values.quizzes = [{ name: "Shnato" }];
    dispatch({ type: "mod" });
  }, [formik]);

  return (
    <div>
      <Navbar />
      <div className="main py-4 px-2 md:max-w-[900px] mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <section className="user-registration">
            <h1 className="text-lg text-center font-bold">
              Register within time
            </h1>
            <UserForm formik={formik} />
          </section>
          <section className="quizzes mt-3">
            <h1 className="text-lg text-center font-bold">Quiz</h1>
            <Quizzes />
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
