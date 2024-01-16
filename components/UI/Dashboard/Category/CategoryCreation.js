"use client";
import { useContext, useEffect, useState } from "react";
import CustAlert from "@/components/Common/Icons/Alert";
import { CustomSessionDataContext } from "@/lib/contexts/dashboard/dashboard-wrapper";
import { DashCreateContext } from "@/lib/contexts/dashboard/create-dashboard-context";
import { TransitionStart } from "@/lib/utils/transition";
import { useStore } from "@/lib/store/auth-provider";

const CategoryCreation = () => {
  const [formInput, setFormInput] = useState({ name: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, err: false });

  const userSession = useStore();
  const { curSelection } = useContext(DashCreateContext);

  const [alertShow, setAlertShow] = useState(false);
  const [alertText, setAlertText] = useState("");

  const [serverErrMessage, setServerErrMessage] = useState("");

  useEffect(() => {
    if (status.success) {
      setAlertShow(true);
      setAlertText("Created Successfully ✅☑");
      setTimeout(() => setAlertShow(false), 4000);
    }

    if (status.err) {
      setAlertShow(true);
      setAlertText("Sorry, An error occurred ❌😢");
      setTimeout(() => setAlertShow(false), 4000);
    }
  }, [status.success, status.err]);

  const validateForm = () => {
    const errors = {};
    if (!formInput.name) errors.name = "A category name must be provided";

    return errors;
  };

  const handleUpdateFormInput = (event) => setFormInput({ ...formInput, [event.target.name]: event.target.value });

  const handleCategoryCreation = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, success: false, err: false });

    const validator = validateForm();
    setErrors(validator);

    if (Object.keys(validator).length === 0) {
      const { name } = formInput;
      const response = await fetch("/api/create/category", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name,
          creator_id: userSession.user.id && userSession.user.id,
        }),
      });

      if (!response.ok) {
        setStatus({ ...status, loading: false, err: true });
        setServerErrMessage(response.statusText);
        return;
      }

      setServerErrMessage("");
      setFormInput({ ...formInput, name: "" });
      setStatus({ ...status, loading: false, success: true, err: false });
    } else {
      setStatus({ ...status, loading: false });
    }
  };

  if (curSelection === "category")
    return (
      <>
        <TransitionStart>
          <div>
            <h2 className="font-extrabold text-2xl py-2">Create Category</h2>

            <div className="mt-2">
              <form onSubmit={(e) => handleCategoryCreation(e)}>
                <div className="grid gap-4">
                  <div>
                    <div className="space-y-1">
                      <label htmlFor="name" className="font-semibold text-gray-50">
                        Category Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="What should this category be called?"
                        className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2e2e2e] focus:border-[#3f3f3f] placeholder:text-[#474747]"
                        value={formInput.name}
                        onChange={(e) => handleUpdateFormInput(e)}
                      />
                    </div>
                    {serverErrMessage && (
                      <p className="text-red-500 text-opacity-75 text-xs font-bold">{serverErrMessage}</p>
                    )}
                    {errors.name && <p className="text-red-500 text-opacity-75 text-xs font-bold">{errors.name}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-2 rounded-md border border-[#2a2b35] duration-200 hover:bg-[#2a2b35] hover:text-inherit disabled:opacity-40 disabled:bg-[#111115] disabled:hover:bg-[#111115]"
                      disabled={status.loading}
                    >
                      {!status.loading ? (
                        <span>
                          Create Category <i className="ri-rocket-line"></i>
                        </span>
                      ) : (
                        <span>
                          Creating... <i className="ri-loader-line"></i>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {alertShow && <CustAlert message={alertText} status={alertText.startsWith("Sorry") ? "red" : "green"} />}
          </div>
        </TransitionStart>
      </>
    );
};

export default CategoryCreation;
