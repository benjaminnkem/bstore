"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useUserData } from "@/lib/store/auth-provider";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import { AnimatePresence } from "framer-motion";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false });

  const router = useRouter();
  const { user } = useUserData();

  if (user) {
    toast.success("Welcome back");
    router.push("/dash");
  }

  if (!user) {
    async function handleSubmit(e) {
      e.preventDefault();

      if (!username || !password) return;
      const loginData = {
        username,
        password,
      };

      setStatus({ ...status, loading: true });
      const res = await signIn("credentials", { ...loginData, redirect: false });

      if (!res.ok) {
        toast.error("Sorry, you could not login.");
        console.log("An error occurred");
        return;
      }

      setUsername("");
      setPassword("");
      toast.success("Logged In Successfully");
      router.push("/dash");
      setStatus({ ...status, loading: false });
    }

    return (
      <AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-full bg-primaryDark text-slate-50">
          <div className="grid w-full h-full place-content-center">
            <TransitionElement>
              <TransitionStart>
                <div className="p-5 border-2 border-gray-700 rounded-md bg-primaryDarkShade-300">
                  <h1 className="mb-4 text-2xl font-semibold">Login</h1>
                  <div className="min-w-[24rem]">
                    <form
                      className="space-y-3"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <div>
                        <label htmlFor="username">Username: </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="w-full p-2 border-gray-600 rounded-md bg-primaryDarkShade-200 focus:outline-none"
                          placeholder="Enter Username"
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="w-full p-2 border-gray-600 rounded-md bg-primaryDarkShade-200 focus:outline-none"
                          placeholder="**********"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>

                      <p>
                        Don&apos;t have an account?{" "}
                        <Link href={"/account/signup"} className="border-b border-orange-500">
                          Sign up
                        </Link>
                      </p>

                      <div>
                        <button
                          className="w-full py-2 transition-colors duration-200 rounded-md bg-primaryDarkShade-400 hover:bg-primaryDarkShade-200 disabled:hover:bg-gray-700"
                          disabled={status.loading}
                        >
                          {status.loading ? "Validating..." : "Login"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </TransitionStart>
            </TransitionElement>
          </div>
        </div>
      </AnimatePresence>
    );
  }
};

export default LoginForm;
