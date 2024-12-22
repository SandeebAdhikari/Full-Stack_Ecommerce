"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<AuthFormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <AuthForm
        type="signIn"
        formData={formData}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SignInPage;
