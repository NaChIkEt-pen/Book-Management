"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import * as Toast from "@radix-ui/react-toast";

const FileUploadFields = () => {
  const [open, setOpen] = useState(false);
  const [toastColor, setToastColor] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Log formData to see what is being sent
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await fetch("/api/post-data/book", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setToastColor("bg-red-500");
        setToastTitle("Failed to Share Book");
        setToastDescription(
          "Maybe you shared this book already? Try another one."
        );
        console.log("HTTP error! status: ", response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setToastColor("bg-green-500");
      setToastTitle("Book Shared");
      setToastDescription("Your book has been successfully shared!");

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setOpen(true);
    }
  };
  return (
    <div className="relative">
      {/* This is the wrapper for relative positioning */}
      <div className="flex justify-center p-20 bg-white rounded-l-xl">
        <div className="border-2 px-10 py-12 rounded-xl">
          {/* Toast Notification for success */}
          <Toast.Provider>
            <Toast.Root
              open={open}
              onOpenChange={setOpen} // Allow closing after showing
              className={`${toastColor} absolute top-3 right-10  text-white p-4 rounded-md shadow-2xl `}
            >
              <Toast.Title className="text-xl font-bold">
                {toastTitle}
              </Toast.Title>
              <Toast.Description className="text-sm">
                {toastDescription}
              </Toast.Description>
            </Toast.Root>
            <Toast.Viewport />
          </Toast.Provider>

          <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
            <Form.Field className="grid mb-[10px]" name="ownerId">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Owner ID
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-black opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter your owner ID
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                  type="text"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="bookName">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Book Name
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-black opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter book name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                  type="text"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="author">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Author Name
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-black opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter author name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                  type="text"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="bookFile">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Upload Book Cover
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-black opacity-[0.8]"
                  match="valueMissing"
                >
                  Please select a file to upload
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-gray-100 shadow-blackA6 inline-flex h-5 appearance-none items-center justify-center rounded-[4px] px-0 text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA6"
                  type="file"
                  accept="image/*"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button
                className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
                type="submit"
              >
                Share the Book
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </div>
  );
};

export default FileUploadFields;
