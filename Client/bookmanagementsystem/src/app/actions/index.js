"use server";

import { signIn } from "../../auth.js";

export async function doGoogleLogin(formdata) {
  await signIn("google", { redirectTo: "/home" });
  console.log("Google Login");
}

export async function doLogout() {
  return null;
}
