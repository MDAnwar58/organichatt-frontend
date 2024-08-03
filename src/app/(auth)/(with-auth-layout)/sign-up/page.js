import React, { Fragment } from "react";
import SignUpForm from "./components/SignUpForm";
import GoogleSignUp from "./components/GoogleSignUp";
import AlreadyHaveAnAccount from "./components/AlreadyHaveAnAccount";

export const metadata = {
  title: "Sign Up |",
};

export default function SignUp() {
  return (
    <Fragment>
      <SignUpForm />
      <div className="w-full flex-1">
        <div className="my-5 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium sm:bg-white transform translate-y-1/2">
            Or sign up with e-mail
          </div>
        </div>
        <GoogleSignUp />
        <AlreadyHaveAnAccount />
      </div>
    </Fragment>
  );
}
