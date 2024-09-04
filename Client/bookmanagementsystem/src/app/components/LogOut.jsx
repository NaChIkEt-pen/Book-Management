"use client";
import { doLogout } from "../../app/actions";

const Logout = () => {
  return (
    <button
      className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
      onClick={() => doLogout()}
    >
      Log Out
    </button>
  );
};

export default Logout;
