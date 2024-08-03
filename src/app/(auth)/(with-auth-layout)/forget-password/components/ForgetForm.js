"use client";
import React, { useEffect } from "react";
import AuthLogo from "../../components/AuthLogo";
import EmailInput from "../../components/EmailInput";
import useAuthContext from "../../_context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getEmail, getErrors, getMessages } from "../../_api/action";

export default function ForgetForm() {
  const { email, ForgetSubmit } = useAuthContext();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errors);
  const msg = useSelector((state) => state.msg);
  const Email = useSelector((state) => state.email);

  useEffect(() => {
    dispatch(getErrors([]));
    dispatch(getMessages(""));
    dispatch(getEmail(""));
  }, [dispatch]);

  return (
    <form>
      <AuthLogo />
      {msg !== "" && (
        <p id="send-msg" className="text-md text-gray-500 mb-3 font-medium">
          {msg}
          <b className="text-green-400">{Email}</b>
        </p>
      )}

      <EmailInput useRef={email} error={errors.email} />
      <button
        type="button"
        className="block w-full bg-green-400 mt-2 py-3 rounded-2xl text-white font-semibold mb-2 uppercase"
        onClick={ForgetSubmit}
      >
        Send Email
      </button>
    </form>
  );
}
