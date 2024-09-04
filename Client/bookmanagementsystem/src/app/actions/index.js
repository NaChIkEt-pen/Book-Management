"use server";

import { signIn, signOut } from "../../auth.js";

export async function doGoogleLogin(formdata) {
  await signIn("google", { redirectTo: "/dashboard" });
  console.log("Google Login");
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
