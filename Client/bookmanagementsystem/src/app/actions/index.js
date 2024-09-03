"use server";

import { signIn } from "@/auth";

export async function doGoogleLogin(formdata) {
  await signIn("google", { redirectTo: "/" });
  console.log("Google Login");
}

export async function doLogout() {
  return null;
}
