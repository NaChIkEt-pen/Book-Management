//book

import { NextResponse, NextRequest } from "next/server";

export async function GET(req, { params }) {
  //const url = new URL(req.url);
  //const searchParams = url.searchParams;

  //const whichuser = searchParams.get('whichuser');
  //const whichpackage = searchParams.get('whichpackage');
  let { ownerId } = params;
  try {
    const response = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKENDURL}:${process.env.NEXT_PUBLIC_BACKENDPORT}/book/get-books/${ownerId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data)
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error Fetching books", error);
    return NextResponse.error("Intenal Server errr", 500);
  }
}
