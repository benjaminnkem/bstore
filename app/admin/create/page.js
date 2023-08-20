"use client";

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

    setLoading(true);
    const res = await axios.post("/api/create/new-admin", formInput);
    if (res.statusText.toLocaleLowerCase() !== "ok") return;
    setLoading(false);

    router.push("/admin/login");
  };

  return (
    <>
      <div className="h-screen w-full grid place-content-center">
        <div className="p-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-5">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-slate-600 border-opacity-20 p-2 outline-none"
                  placeholder="Username"
                  autoComplete="false"
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
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="w-full bg-transparent border-b border-slate-600 border-opacity-20 p-2 outline-none"
                  placeholder="Password"
                  autoComplete="false"
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
                    Create <FontAwesomeIcon icon={faAdd} />
                  </>
                ) : (
                  "Creating..."
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAdmin;
