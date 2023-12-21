// Login.js
"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { auth } from "../fb";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const Login = (e:any) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("signed in successfully");
        router.push("/Dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("failed: Invalid Credentials");
      });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F2F4F8]">
  <div className="w-[580px] mx-auto p-6 bg-white rounded-md shadow-lg mt-8">
    <h2 className="text-2xl font-bold mb-4 text-lime-400 text-center">Login</h2>
    <form onSubmit={Login} className="mt-4 text-center">
      <label className="block mb-2 text-black">
        Email:
        <input
          type="email"
          ref={emailRef}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </label>
      <br />
      <label className="block mb-2 text-black">
        Password:
        <input
          type="password"
          ref={passwordRef}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </label>
      
      <button
          type="submit"
          className="mt-6 p-2 pl-6 pr-6 bg-blue-500 text-white  rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </button>
      <p className="mt-4 text-md text-black">
        <br />
        Don't have an account? <br />
        <Link className="text-blue-500" href="/Register">
          Register Now
        </Link>
      </p>
    </form>
    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
  </div>
</div>

  );
};

export default Login;