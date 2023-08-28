"use client";

import { sun3D } from "@/app/reuseable/three/solar/solar";
import { faArrowLeft, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles/signup.css";
import Link from "next/link";

const CreateAdmin = () => {
  const [formInput, setFormInput] = useState({ username: "", password: "", email: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });
  const [err, setErr] = useState("");

  const router = useRouter();

  const handleFormInput = (e) => {
    const value = e.target.value;
    setFormInput({ ...formInput, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ ...status, loading: true });
    try {
      await axios.post("/api/create/new-user", formInput);
      setStatus({ ...status, loading: false, success: true });
    } catch (e) {
      setStatus({ ...status, loading: false, error: true });
      setErr(e.response.statusText);
      return;
    }

    // router.push("/admin/login")
  };

  useEffect(() => sun3D(), []);

  return (
    <>
      <div>
        <div className="md:fixed md:w-1/2 w-full bg-opacity-90 duration-200 bg-[#212121] min-h-full grid place-content-center absolute">
          <Link
            href={"/"}
            passHref
            className="absolute top-4 left-4 duration-200 md:text-lg text-base px-2 py-[2px] hover:border-[#656565] border border-transparent rounded-md"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Home
          </Link>

          <div className="p-4">
            {status.success ? (
              <div className="space-y-2 md:text-start text-center">
                <h3 className="text-3xl">Account Created Successfully! 🎉</h3>
                <button
                  className="mx-auto md:mx-0 px-4 py-2 rounded-md border border-orange-500"
                  onClick={() => router.push("/admin/login")}
                >
                  Login <FontAwesomeIcon icon={faRocket} />
                </button>
              </div>
            ) : status.error ? (
              <div>
                <div className="space-y-2 md:text-start text-center">
                  <h3 className="text-xl font-semibold text-red-300">{err}</h3>
                  <button
                    className="mx-auto md:mx-0 px-4 py-2 rounded-md border border-orange-500"
                    onClick={() => setStatus({ error: false })}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="pb-6">
                  <h1 className="text-4xl font-bold">
                    Create An <span className="text-orange-500">Account</span>
                  </h1>
                  {/* {status.success && (
                    <p className="text-sm text-green-500 font-semibold">Created account successfully! 🎉</p>
                  )} */}
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-slate-400 border-opacity-20 p-2 outline-none"
                        placeholder="Username"
                        autoComplete="off"
                        name="username"
                        value={formInput.username}
                        onChange={(e) => handleFormInput(e)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-slate-400 border-opacity-20 p-2 outline-none"
                        placeholder="Enter email"
                        name="email"
                        value={formInput.email}
                        onChange={(e) => handleFormInput(e)}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="w-full bg-transparent border-b border-slate-400 border-opacity-20 p-2 outline-none"
                        placeholder="Password"
                        autoComplete="off"
                        name="password"
                        value={formInput.password}
                        onChange={(e) => handleFormInput(e)}
                        required
                      />
                    </div>

                    <div>
                      <p className="text-sm">
                        Already have an account?{" "}
                        <Link href={"/admin/login"} className="border-b border-orange-400">
                          Login
                        </Link>
                      </p>
                    </div>
                    <button
                      role="submit"
                      disabled={status.loading}
                      className="py-2 rounded-md border-2 border-gray-300 border-opacity-40 w-full duration-200 hover:bg-gray-300 hover:text-gray-900 disabled:opacity-10 disabled:hover:bg-transparent disabled:hover:text-white"
                    >
                      {!status.loading ? (
                        <>
                          Sign Up <FontAwesomeIcon icon={faRocket} />
                        </>
                      ) : (
                        "Creating..."
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        <div>
          <canvas id="canva" className="fixed w-1/2 h-full right-0"></canvas>
        </div>
      </div>
    </>
  );
};

export default CreateAdmin;