import React from "react";
import { InputFields } from "./InputFields";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className={`${styles.LoginPageMain} z-0 flex `}>
        <div
          className={`LoginPage-Vertical-Marquee flex-col pt-10 overflow-auto`}
        >
          <div className="Marquee-Title items-center pl-40 ">
            <h1 className="text-white text-[35px] font-small">
              Book Management System
            </h1>
          </div>
          <div className={`${styles.MarqueeImage} flex py-10 px-28 space-x-4 `}>
            <Image
              src="/BookImages/HP1.jpg"
              alt="Book Management System"
              width={250}
              height={100}
            />
            <Image
              src="/BookImages/HP2.jpg"
              alt="Book Management System"
              width={250}
              height={100}
            />
          </div>
          {/* <div className={`MarqueeImage flex py-10 px-28 space-x-4`}>
          <Image
            src="/BookImages/HP3.jpg"
            alt="Book Management System"
            width={250}
            height={100}
          />
          <Image
            src="/BookImages/HP4.jpg"
            alt="Book Management System"
            width={250}
            height={100}
          />
        </div>
        <div className={`MarqueeImage flex py-10 px-28 space-x-4`}>
          <Image
            src="/BookImages/HP3.jpg"
            alt="Book Management System"
            width={250}
            height={100}
          />
          <Image
            src="/BookImages/HP4.jpg"
            alt="Book Management System"
            width={250}
            height={100}
          />
        </div>
        <div className={`MarqueeImage flex py-10 px-28 space-x-4`}>
          <Image
            src="/BookImages/Dune1.jpg"
            alt="Book Management System"
            width={250}
            height={100}
          />
          <Image
            src="/BookImages/Dune2.jpg"
            alt="Book Management System"
            width={250}
            height={100}
          />
        </div> */}
        </div>
        <div className="InputFieldsDiv flex justify-end z-10 h-screen">
          {<InputFields />}
        </div>
      </div>
    </div>
  );
};

export default page;
