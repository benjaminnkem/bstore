"use client";

import { sun3D } from "@/app/reuseable/three/solar/solar";
import { faAdd, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateAdmin = () => {
  const [formInput, setFormInput] = useState({ username: "", password: "", email: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleFormInput = (e) => {
    const value = e.target.value;
    setFormInput({ ...formInput, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoading(true);
    // const res = await axios.post("/api/create/new-admin", formInput);
    // if (res.statusText.toLocaleLowerCase() !== "ok") return;
    // setLoading(false);

    // router.push("/admin/login");
  };

  useEffect(() => sun3D(), []);

  return (
    <>
      <div>
        <div className="fixed w-1/2 h-full grid place-content-center">
          <div className="p-4">
            <div>
              <h1 className="text-4xl pt-6 font-bold">Create An <span className="text-orange-500">Account</span></h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-slate-600 border-opacity-20 p-2 outline-none"
                    placeholder="Username"
                    autoComplete="off"
                    name="username"
                    value={formInput.username}
                    onChange={(e) => handleFormInput(e)}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-slate-600 border-opacity-20 p-2 outline-none"
                    placeholder="Enter email"
                    name="email"
                    value={formInput.email}
                    onChange={(e) => handleFormInput(e)}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="w-full bg-transparent border-b border-slate-600 border-opacity-20 p-2 outline-none"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    value={formInput.password}
                    onChange={(e) => handleFormInput(e)}
                  />
                </div>
                <button
                  role="submit"
                  disabled={loading}
                  className="py-2 rounded-md border-2 border-gray-300 border-opacity-40 w-full duration-200 hover:bg-gray-300 hover:text-gray-900 disabled:opacity-10 disabled:hover:bg-transparent disabled:hover:text-white"
                >
                  {!loading ? (
                    <>
                      Sign Up <FontAwesomeIcon icon={faRocket} />
                    </>
                  ) : (
                    "Creating..."
                  )}
                </button>
              </div>
            </form>
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
