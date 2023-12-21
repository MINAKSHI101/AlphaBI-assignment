"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../fb";

import { FirebaseError } from "firebase/app";

import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

const Register = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const Register = (e:any) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("SignUp Successful");
        router.push("/Login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("SignUp Failed");
        // ..
      });
  };

  return (
<div className="w-screen h-screen flex items-center justify-center bg-[#F2F4F8]">
  <div className="w-[580px] mx-auto p-6 bg-white rounded-md shadow-lg">
    <div>
      <h2 className="text-2xl font-bold mb-4 text-lime-400 text-center">User Registration</h2>
      <form onSubmit={Register} className="mt-4 text-center">
        <label className="block text-lg text-black">
          Email:
          <input
            className="mt-1 p-2 block w-full border border-slate-400 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            ref={emailRef}
            required
          />
        </label>
        <br />
        <label className="block mt-4 text-black">
          Password:
          <input
            className="mt-1 p-2 block w-full border border-slate-400 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            ref={passwordRef}
            required
          />
        </label>
        <br />
        <button
          type="submit"
          className="mt-6  bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Have an account? <br />
        <a
          href="/login"
          className="text-blue-500"
          onClick={() => router.push("/Login")}
        >
          Login Now
        </a>
      </p>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  </div>
</div>


  );
};

export default Register;