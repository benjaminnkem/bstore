"use client";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const loginData = {
      username,
      email,
      password,
    };

    const response = await fetch(`/api/create/new-admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      console.log("An error occurred");
      return;
    }

    console.log("User created");
  }

  function check() {
    console.log(username, email, password);
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 text-slate-50">
        <div className="grid w-full h-full place-content-center">
          <div className="p-5 border-2 rounded-md border-slate-700">
            <h1 className="mb-4 text-xl font-semibold">Login</h1>

            <div className="min-w-[20rem]">
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  handleSubmit(e);
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
                      check();
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
                      check();
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
                      check();
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
        </div>
      </div>
    </>
  );
};

export default SignIn;
