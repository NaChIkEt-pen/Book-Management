"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import styles from "@/styles/Login.module.css";
import { CgSmileSad } from "react-icons/cg";

export const InputFields = () => {
  const [serverErrors, setServerErrors] = React.useState({
    email: false,
    password: false,
  });
  const submitFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
  };
  const handleClearServerErrors = () => {
    setServerErrors({ email: false, password: false });
  };

  const test = (event) => {
    event.preventDefault();
    console.log("Testing");
  };
  return (
    <div
      className={`${styles.InputFieldMainDiv} main-div flex justify-end p-20 bg-white rounded-l-xl`}
    >
      <div className="border-2 px-10 py-14 rounded-xl">
        <Form.Root
          className="w-[260px]"
          onSubmit={submitFormData}
          onClearServerErrors={handleClearServerErrors}
        >
          <Form.Field
            className="grid mb-[10px]"
            name="email"
            serverInvalid={serverErrors.email}
          >
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                Email
              </Form.Label>
              <Form.Message
                className="text-[13px] text-black opacity-[0.8]"
                match="valueMissing"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                className="text-[13px] text-black opacity-[0.8]"
                match="typeMismatch"
                forceMatch={serverErrors.email}
              >
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                type="email"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field
            className="grid mb-[10px]"
            name="password"
            serverInvalid={serverErrors.password}
          >
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                Password
              </Form.Label>
              <Form.Message
                className="text-[13px] text-white opacity-[0.8]"
                match="valueMissing"
              >
                Please enter your password
              </Form.Message>
              <Form.Message
                className="text-[13px] text-black opacity-[0.8]"
                match="tooShort"
              >
                Your password must be at least 8 characters long
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                type="password"
                required
                minLength="8"
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button
              className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
              type="submit"
            >
              Log In
            </button>
          </Form.Submit>
          <div className={`flex space-x-2`}>
            <button
              className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
              onClick={test}
            >
              <CgSmileSad className="space-x-2" /> Password
            </button>
            <button
              className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
              onClick={test}
            >
              Sign Up
            </button>
          </div>
        </Form.Root>
      </div>
    </div>
  );
};
