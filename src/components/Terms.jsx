import React from "react";

const Terms = ({ formik }) => {
  return (
    <>
      <p className="text-xs text-gray-500">
        Please read the conditions before applying for the course
      </p>
      <div className="bg-gray-100 grid gap-2 p-3 rounded-md h-36 overflow-y-scroll tc font-mono text-sm text-slate-600">
        <p className="font-bold text-black">
          By enrolling in the course, I agree to the following terms and
          conditions:
        </p>
        <ul className="grid gap-2">
          <li>
            <span className="font-bold text-black">Enrollment: </span> Limited
            seats are available for this course. Selection will be done based on
            your response. You will receive a confirmation mail form us.
          </li>
          <li>
            <span className="font-bold text-black">Attendance: </span> Regular
            attendance is mandatory for successful completion of the course. You
            are expected to attend all scheduled classes and complete all
            required coursework on time. If you miss any classes or coursework
            without informing your instructor, you might get terminated from the
            course.
          </li>
          <li>
            <span className="font-bold text-black">Certification: </span>
            Upon successfully completing the course, you will receive a
            certificate of completion. Top 3 performers will get appreciation
            letter. The certificate is awarded based on satisfactory performance
            in all required coursework and examinations. The department reserves
            the right to withhold the certificate if the student fails to meet
            the requirements.
          </li>
          <li>
            <span className="font-bold text-black">Course Materials: </span>
            You will receive course materials, supporting documents, e-books,
            pdf and many other materials based on the requirements.
          </li>
        </ul>
        <div className="flex justify-center mt-2">
          <label
            htmlFor="accept-tc"
            className="flex gap-2 items-center  cursor-pointer"
          >
            <input
              type="checkbox"
              id="accept-tc"
              className="accent-blue-950"
              {...formik.getFieldProps("tc")}
            />{" "}
            I accept all the terms and conditions.
          </label>
        </div>
      </div>
    </>
  );
};

export default Terms;
