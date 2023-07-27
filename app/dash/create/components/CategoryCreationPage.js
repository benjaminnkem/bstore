"use client";
import { useContext, useEffect, useState } from "react";
import { CustomSessionDataContext } from "../../components/DashboardWrapper";
import CustAlert from "@/components/Alert";
import { DashCreateContext } from "../context/CreateContextProvider";

const CategoryCreation = () => {
  const [formInput, setFormInput] = useState({ name: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, err: false });

  const sessionContent = useContext(CustomSessionDataContext);
  const { curSelection } = useContext(DashCreateContext);

  const [alertShow, setAlertShow] = useState(false);
  const [alertText, setAlertText] = useState("");

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
    if (!formInput.name) errors.name = "A Category name must be provided";

    return errors;
  };

  const handleUpdateFormInput = (event) => setFormInput({ ...formInput, [event.target.name]: event.target.value });

  const handleCategoryCreation = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, success: false, err: false });

    const validator = validateForm();
    setErrors(validator);

    console.log(validator, errors);

    if (Object.keys(errors).length > 0) {
      setStatus({ ...status, loading: false });
      return;
    } else {
      const { name } = formInput;
      const response = await fetch("/api/create/category", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name,
          creator_id: sessionContent.user.id && sessionContent.user.id,
        }),
      });

      if (!response.ok) {
        setStatus({ ...status, loading: false, err: true });
        return;
      }

      setStatus({ ...status, loading: false, success: true, err: false });
    }
  };

  if (curSelection === "category")
    return (
      <>
        <div className="relative">
          <h2 className="font-extrabold text-2xl py-2">Create Category</h2>

          <div className="mt-2">
            <form onSubmit={(e) => handleCategoryCreation(e)}>
              <div className="grid gap-4">
                <div>
                  <div className="space-y-1">
                    <label htmlFor="name" className="font-semibold text-[#b4b8d8]">
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="What should this category be called?"
                      className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                      value={formInput.name}
                      onChange={(e) => handleUpdateFormInput(e)}
                    />
                  </div>
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
      </>
    );
};

export default CategoryCreation;