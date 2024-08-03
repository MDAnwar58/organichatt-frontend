"use client";
import React, { useRef, useState } from "react";
import Input from "../common/components/Input";
import axiosClient from "../../axios-client";
import useNotify from "../common/components/notify";

export default function Contact() {
  const { notify } = useNotify();
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const subject = useRef(null);
  const des = useRef(null);
  const form = useRef(null);
  const [errors, setErrors] = useState([]);
  const sendMsg = async () => {
    try {
      const response = await axiosClient.post(`/contact-store`, {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        subject: subject.current.value,
        des: des.current.value,
      });
      if (response.data.status === "success") {
        notify(response.data.status, response.data.msg);
        form.current.reset();
      }
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  return (
    <div className="lg:w-7/12 w-full">
      <div className="p-5 bg-slate-50 shadow-lg rounded-lg border">
        <h3 className="text-center text-xl font-semibold pb-5">Contact US</h3>
        <form ref={form}>
          <div className=" mb-3">
            <Input
              type="text"
              useRef={name}
              className="w-full rounded-md px-5 lg:py-3 py-2 border focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <strong className=" text-red-500">{errors.name}</strong>
            )}
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Input
              type="email"
              useRef={email}
              className="w-full rounded-md px-5 lg:py-3 py-2 border mb-3 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Your Email"
            />
            <Input
              type="text"
              useRef={phone}
              className="w-full rounded-md px-5 mb-3 lg:py-3 py-2 border focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-3">
            <Input
              type="text"
              useRef={subject}
              className="w-full rounded-md px-5 lg:py-3 py-2 border focus:ring-green-500 focus:border-green-500"
              placeholder="Subjects"
            />
            {errors.subject && (
              <strong className=" text-red-500">{errors.subject}</strong>
            )}
          </div>
          <div className="mb-3">
            <textarea
              ref={des}
              className="w-full rounded-md p-5 lg:py-3 py-2 border focus:ring-green-500 focus:border-green-500"
              rows={10}
            />
            {errors.des && (
              <strong className=" text-red-500">{errors.des}</strong>
            )}
          </div>
          <div className="text-end">
            <button
              type="button"
              className="text-white text-xl font-semibold bg-green-400 px-5 py-2 rounded-md"
              onClick={() => sendMsg()}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
