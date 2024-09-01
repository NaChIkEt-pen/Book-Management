import React from "react";
import { InputFields } from "./InputFields";
import styles from "@/styles/Login.module.css";
const page = () => {
  return (
    <div className={`${styles.LoginPageMain} z-0 flex`}>
      <div className={`LoginPage-Vertical-Marquee `}></div>
      <div className="InputFieldsDiv flex justify-end w-full z-10 h-screen">
        {<InputFields />}
      </div>
    </div>
  );
};

export default page;
