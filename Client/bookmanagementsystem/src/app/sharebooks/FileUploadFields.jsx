"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
const FileUploadFields = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("File uploaded:", formData.get("bookname"));
    console.log("File uploaded:", formData.get("file"));
  };
  return (
    <div>
      <div className="flex justify-center p-20 bg-white rounded-l-xl">
        <div className="border-2 px-10 py-14 rounded-xl">
          <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
            <Form.Field className="grid mb-[10px]" name="bookname">
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
            <Form.Field className="grid mb-[10px]" name="authorname">
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
            <Form.Field className="grid mb-[10px]" name="file">
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
