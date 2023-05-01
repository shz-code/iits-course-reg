import { Fingerprint, Mail, Phone, User } from "lucide-react";
import React from "react";
import InputElement from "./ui/InputElement";
import TextAreaElement from "./ui/TextAreaElement";

const UserForm = ({ formik }) => {
  console.log();
  return (
    <>
      <h1 className="text-center font-bold">User Information</h1>
      <div className="student-info">
        {/* bg-[#111827]  */}
        <p className="text-xs text-gray-500">
          Fill out the user information's below
        </p>
        <InputElement
          icon={<User size="20" color="white" />}
          label="Your Name"
          placeholder="Enter Your Name"
          type="text"
          {...formik.getFieldProps("name")}
        />
        <InputElement
          icon={<Mail size="20" color="white" />}
          label="Your Email"
          placeholder="Enter Your Email"
          type="text"
          {...formik.getFieldProps("email")}
        />
        <InputElement
          icon={<Fingerprint size="20" color="white" />}
          label="Your Id"
          placeholder="Enter Your Id"
          type="number"
          min={18000000}
          max={23300000}
          {...formik.getFieldProps("id")}
        />
        <InputElement
          icon={<Phone size="20" color="white" />}
          label="Your Number"
          placeholder="Enter Your Number"
          type="text"
          {...formik.getFieldProps("phone")}
        />
        <TextAreaElement
          label="Why do you want to do this course? (200 letters)"
          placeholder="Write why you want to do this course in 200 letters"
          wordCount={formik.values?.reason.length}
          {...formik.getFieldProps("reason")}
        />
      </div>
    </>
  );
};

export default UserForm;
