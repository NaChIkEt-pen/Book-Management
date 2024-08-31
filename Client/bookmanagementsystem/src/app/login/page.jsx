import React from "react";
import { InputFields } from "./InputFields";
import styles from "@/styles/Login.module.css";
const page = () => {
  return (
    <div className={`${styles.LoginPageMain} relative z-0`}>
      {<InputFields />}
    </div>
  );
};

export default page;
