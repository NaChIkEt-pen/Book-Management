"use client";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/Home.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MainBanner() {
  const router = useRouter();
  return (
    <div className={`flex ${styles.BannerMainDiv} w-full pt-10 pl-5 `}>
      <div className={`flex-col`}>
        <h1
          className={`text-7xl text-white overflow-ellipsis text-left font-medium font-sans`}
        >
          Find YourSelf a Great Book
        </h1>
        <h3 className={`text-white text-left font-medium font-sans pt-4`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className="flex">
          <button
            className={`mt-4 flex items-center border border-white bg-purple-500 text-white py-2 px-4 rounded-full font-medium hover:bg-crimson-700 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:ring-offset-2`}
            onClick={() => router.push("/login")}
          >
            Get Started <FaLocationArrow className="ml-2" />
          </button>
          <button
            className={`mt-4 ml-10 flex items-center border border-white text-white py-2 px-4 rounded-full font-medium hover:bg-crimson-700 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:ring-offset-2`}
            onClick={() => router.push("/learnmore")}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-end w-full mr-20">
        <Image src="/BookMainBanner.png" width={250} height={250} />
      </div>
    </div>
  );
}
