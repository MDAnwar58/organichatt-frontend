import React, { Fragment } from "react";
import SignInForm from "./components/SingInForm";

export const metadata = {
  title: "Sign In |",
};

export default function SignIn() {
  return (
    <Fragment>
      <SignInForm />
    </Fragment>
  );
}
