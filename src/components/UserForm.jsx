import { Fingerprint, Mail, Phone, User } from "lucide-react";
import React from "react";
import InputElement from "./InputElement";

const UserForm = ({ formik }) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default UserForm;
