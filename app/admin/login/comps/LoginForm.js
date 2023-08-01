"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingIcon from "@/partials/LoadingIcon";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false });

  const { status: sessionStatus } = useSession();
  const router = useRouter();

  if (sessionStatus === "loading") {
    return (
      <>
        <div className="fixed top-0 left-0 z-50 grid w-full h-full place-content-center">
          <LoadingIcon />
          <p className="text-center">Checking Login Status... Please hold</p>
        </div>
      </>
    );
  }

  if (sessionStatus === "authenticated") {
    router.push("/dash");
    return;
  }

  if (sessionStatus === "unauthenticated") {
    async function handleSubmit(e) {
      e.preventDefault();

      if (!username || !password) return;
      const loginData = {
        username,
        password,
      };

      setStatus({ ...status, loading: true });
      const res = await signIn("credentials", loginData);

      if (!res.ok) {
        console.log("An error occurred");
      }

      console.log("It looks okay");
      setUsername("");
      setPassword("");
      setStatus({ ...status, loading: false });
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
                    <button
                      className="w-full py-2 transition-colors duration-200 rounded-md bg-slate-700 hover:bg-slate-800"
                      disabled={status.loading}
                    >
                      {status.loading ? "Validating..." : "Login"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default LoginForm;
