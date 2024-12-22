"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    ssn: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="-mt-5 flex min-h-screen items-center justify-center">
      <AuthForm
        type="signUp"
        formData={formData}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SignUpPage;
