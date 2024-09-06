"use client";
import React, { useState } from "react";
import Image from "next/image";

function BookShowCase() {
  const [previewUrl, setPreviewUrl] = useState("/BookImages/Dune1.jpg");

  const handleClick = (event) => {
    const src = event.target.getAttribute("data-src");
    setPreviewUrl(src);
  };

  return (
    <div className="flex justify-end w-full">
      <div className="PreviewDiv pl-20">
        <Image
          src={previewUrl}
          alt="shelf"
          width={450}
          height={11}
          className="mr-12"
        />
      </div>
      <div className="flex-col justify-end w-full">
        <div className="flex-col justify-end w-full">
          <div className="flex justify-end w-full pr-20 pt-10">
            <div onClick={handleClick} className="inline-block">
              <Image
                src="/BookImages/Dune1.jpg"
                alt="shelf"
                width={110}
                height={10}
                className="mr-12"
                data-src="/BookImages/Dune1.jpg"
              />
            </div>
            <div onClick={handleClick} className="inline-block">
              <Image
                src="/BookImages/Dune2.jpg"
                alt="shelf"
                width={110}
                height={10}
                className="mr-12"
                data-src="/BookImages/Dune2.jpg"
              />
            </div>
            <div onClick={handleClick} className="inline-block">
              <Image
                src="/BookImages/HP1.jpg"
                alt="shelf"
                width={110}
                height={10}
                className="mr-12"
                data-src="/BookImages/HP1.jpg"
              />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <Image
              src="/shelf.png"
              alt="shelf"
              width={670}
              height={100}
              className=""
            />
          </div>
        </div>
        <div className="flex-col justify-end w-full">
          <div className="flex justify-end w-full pr-20 pt-10">
            <div onClick={handleClick} className="inline-block">
              <Image
                src="/BookImages/HP2.jpg"
                alt="shelf"
                width={110}
                height={10}
                className="mr-12"
                data-src="/BookImages/HP2.jpg"
              />
            </div>
            <div onClick={handleClick} className="inline-block">
              <Image
                src="/BookImages/HP3.jpg"
                alt="shelf"
                width={110}
                height={10}
                className="mr-12"
                data-src="/BookImages/HP3.jpg"
              />
            </div>
            <div onClick={handleClick} className="inline-block">
              <Image
                src="/BookImages/HP4.jpg"
                alt="shelf"
                width={110}
                height={10}
                className="mr-12"
                data-src="/BookImages/HP4.jpg"
              />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <Image
              src="/shelf.png"
              alt="shelf"
              width={670}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookShowCase;
