import React from "react";
import NavBar from "../components/DashBoard/NavBar";
import { auth } from "../../auth";
import FileUploadFields from "./FileUploadFields";
const shareBooks = () => {
  return (
    <div className="sharebooksprimary">
      <NavBar />
      <FileUploadFields />
    </div>
  );
};

export default shareBooks;
