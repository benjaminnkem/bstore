"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/contact.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";

const defaultInputs = { fullName: "", email: "", subject: "", content: "" };
const ContactClient = () => {
  const [inputs, setInputs] = useState(defaultInputs);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });
  const handleFormValidation = () => {
    const errors = {};
    if (!inputs.fullName) errors.fullName = "Enter your full name";
    if (!inputs.email) {
      errors.email = "Enter your email address";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputs.email)) {
      errors.email = "Invalid email address";
    }
    if (!inputs.subject) errors.subject = "A subject is required";
    if (!inputs.content) errors.content = "No content text provided";

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const validator = handleFormValidation();
    console.log(validator);
    setErrors(validator);

    if (Object.keys(validator).length === 0) {
      await new Promise((resolve) => setTimeout(() => resolve(), 4000));
      setInputs(defaultInputs);
      setIsLoading(false);
      toast.success("Message sent!");
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="jumbo flex md:max-w-[1488px] w-11/12 mx-auto items-center py-10">
        <div className="md:grid gap-2 grid-cols-2 items-center">
          <TransitionElement>
            <div className="space-y-4 py-10 md:py-0 text-center md:text-start">
              <h1 className="lg:text-5xl text-4xl">Get in touch with our customer care. 👋🏿</h1>

              <p className="dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero natus culpa asperiores vitae
                aspernatur, porro impedit. Sit dolore magnam consectetur similique odio aliquid eveniet at laboriosam!
              </p>
            </div>
          </TransitionElement>

          <TransitionStart>
            <div>
              <div className="sm:w-4/5 w-11/12 md:ml-auto mx-auto md:mx-0 bg-white dark:bg-primaryDarkShade-200 rounded-lg p-4">
                <h2 className="text-2xl">Send us a message 🚀</h2>
                <div className="mt-4">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          className={`w-full p-2 rounded-md outline-none border-2 focus:border-gray-300 dark:focus:border-gray-500 duration-200 bg-gray-100 dark:bg-primaryDark ${
                            errors.fullName ? "border-red-500" : "border-transparent"
                          }`}
                          value={inputs.fullName}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          className={`w-full p-2 rounded-md outline-none border-2 focus:border-gray-300 dark:focus:border-gray-500 duration-200 bg-gray-100 dark:bg-primaryDark ${
                            errors.email ? "border-red-500" : "border-transparent"
                          }`}
                          value={inputs.email}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className={`w-full p-2 rounded-md outline-none border-2 focus:border-gray-300 dark:focus:border-gray-500 duration-200 bg-gray-100 dark:bg-primaryDark ${
                            errors.subject ? "border-red-500" : "border-transparent"
                          }`}
                          value={inputs.subject}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div>
                        <textarea
                          type="text"
                          name="content"
                          placeholder="Subject"
                          className={`w-full p-2 rounded-md outline-none border-2 focus:border-gray-300 dark:focus:border-gray-500 duration-200 bg-gray-100 dark:bg-primaryDark resize-none ${
                            errors.content ? "border-red-500" : "border-transparent"
                          }`}
                          rows={5}
                          value={inputs.content}
                          onChange={(e) => handleInputChange(e)}
                        ></textarea>
                      </div>

                      <button
                        className="bg-orange-500 text-orange-100 px-4 py-2 rounded-md group hover:scale-105 transition ease-linear min-w-[6.625rem] disabled:opacity-50"
                        disabled={isLoading}
                      >
                        {!isLoading ? (
                          <>
                            Submit{" "}
                            <FontAwesomeIcon
                              icon={faPaperPlane}
                              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition ease-linear"
                            />
                          </>
                        ) : (
                          <>
                            <i className="ri-loader-2-line animate-spin"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </TransitionStart>
        </div>
      </section>
    </>
  );
};

export default ContactClient;
