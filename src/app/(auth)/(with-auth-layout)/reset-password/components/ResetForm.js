"use client";
import React, { useEffect } from "react";
import AuthLogo from "../../components/AuthLogo";
import PasswordInput from "../../components/PasswordInput";
import PasswordConfirmationInput from "../../components/PasswordConfirmationInput";
import useAuthContext from "../../_context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getErrors } from "../../_api/action";

export default function ResetForm() {
  const {
    setParamEmail,
    paramEmail,
    password,
    password_confirmation,
    ResetSubmit,
  } = useAuthContext();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  useEffect(() => {
    // Get the query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);
    // Extract the 'email' parameter
    const emailParam = queryParams.get("email");
    // Set the email state
    if (emailParam) {
      setParamEmail(emailParam);
    }
    dispatch(getErrors([]));
  }, [setParamEmail, dispatch]);
  return (
    <form>
      <AuthLogo />
      <PasswordInput useRef={password} error={errors.password} />
      <PasswordConfirmationInput
        useRef={password_confirmation}
        error={errors.password_confirmation}
      />
      <button
        type="button"
        className="block w-full bg-green-400 mt-2 py-3 rounded-2xl text-white font-semibold mb-2 uppercase"
        onClick={ResetSubmit}
      >
        Reset
      </button>
    </form>
  );
}
