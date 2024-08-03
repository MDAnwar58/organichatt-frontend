"use client";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword, sendEmail, signIn, signUp } from "../_api/action";
import { useRouter } from "next/navigation";
import useNotify from "../components/notify";

export default function useAuthContext() {
  const name = useRef();
  const email = useRef();
  const [paramEmail, setParamEmail] = useState("");
  const password = useRef();
  const password_confirmation = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const { notify } = useNotify();

  const SignInRequest = () => {
    const payload = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(signIn(payload, router));
  };

  const SingUpSubmit = () => {
    const payload = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      password_confirmation: password_confirmation.current.value,
    };
    dispatch(signUp(payload, router, notify));
  };

  const ForgetSubmit = () => {
    const payload = {
      email: email.current.value,
    };
    dispatch(sendEmail(payload));
  };

  const ResetSubmit = () => {
    const payload = {
      email: paramEmail,
      password: password.current.value,
      password_confirmation: password_confirmation.current.value,
    };
    dispatch(resetPassword(payload, router, notify));
  };

  return {
    name,
    email,
    password,
    password_confirmation,
    SignInRequest,
    SingUpSubmit,
    ForgetSubmit,
    setParamEmail,
    paramEmail,
    ResetSubmit,
  };
}
