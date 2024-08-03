"use client";
import React, { Fragment, useEffect } from "react";
import NameInput from "../../components/NameInput";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import PasswordConfirmationInput from "../../components/PasswordConfirmationInput";
import useAuthContext from "../../_context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getErrors } from "../../_api/action";

export default function SignUpForm() {
  const { name, email, password, password_confirmation, SingUpSubmit } =
    useAuthContext();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getErrors([]));
  }, [dispatch]);

  return (
    <Fragment>
      <form>
        <h1 className="text-gray-800 font-bold text-2xl">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-3">Welcome Back</p>
        <NameInput useRef={name} error={errors.name} />
        <EmailInput useRef={email} error={errors.email} />
        <PasswordInput useRef={password} error={errors.password} />
        <PasswordConfirmationInput
          useRef={password_confirmation}
          error={errors.password_confirmation}
        />
        <button
          type="button"
          className="block w-full bg-green-400 mt-4 py-3 rounded-2xl text-white font-semibold mb-2 uppercase"
          onClick={() => SingUpSubmit()}
        >
          Sign Up
        </button>
      </form>
    </Fragment>
  );
}
