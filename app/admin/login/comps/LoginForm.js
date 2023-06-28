"use client";
import { useState } from "react";

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>
      <div className="p-5 border-2 rounded-md border-slate-700">
        <h1 className="mb-4 text-xl font-semibold">Login</h1>
        <div className="min-w-[20rem]">
          <form
            className="space-y-3"
            onSubmit={async (e) => {
              await handleSubmit(e);
            }}
          >
            <div>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full p-2 bg-transparent border-b rounded-md focus:outline-none border-slate-600 bg-slate-900"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 bg-transparent border-b rounded-md focus:outline-none border-slate-600 bg-slate-900"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 bg-transparent border-b rounded-md focus:outline-none border-slate-600 bg-slate-900"
                placeholder="Create password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <button className="w-full py-2 transition-colors duration-200 rounded-md bg-slate-700 hover:bg-slate-800">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
