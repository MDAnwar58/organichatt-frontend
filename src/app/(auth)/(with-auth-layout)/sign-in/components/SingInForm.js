"use client";
import React, { Fragment, useEffect } from "react";
import GoogleSingIn from "./GoogleSignIn";
import CreateAnAccount from "./CreateAnAccount";
import AuthLogo from "../../components/AuthLogo";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Link from "next/link";
import useAuthContext from "../../_context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getErrors } from "../../_api/action";

export default function SingInForm() {
  const { email, password, SignInRequest } = useAuthContext();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  useEffect(() => {
    dispatch(getErrors([]));
  }, [dispatch]);
  return (
    <Fragment>
      <form>
        <AuthLogo />
        <EmailInput useRef={email} error={errors.email} />
        <PasswordInput useRef={password} error={errors.password} />
        <div className=" text-end">
          <Link href="/forget-password" className=" text-green-400 underline">
            forget password?
          </Link>
        </div>
        <button
          type="button"
          onClick={SignInRequest}
          className="block w-full bg-green-400 mt-2 py-3 rounded-2xl text-white font-semibold mb-2 uppercase"
        >
          Sign In
        </button>
      </form>
      <div className="w-full flex-1">
        <div className="my-5 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium sm:bg-white transform translate-y-1/2">
            Or sign in with e-mail
          </div>
        </div>

        <GoogleSingIn />

        <CreateAnAccount />
      </div>
    </Fragment>
  );
}
