"use client";

import { useEffect, useRef, useState } from "react";
import AddProductDetCart from "./AddToCartBtn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewsManager from "./reviews-manager";

const itemDescClass = "flex justify-between items-center py-2 border-[#666666] border-t border-opacity-50";

const ProdDetails = ({ post }) => {
  const [customQuantity, setCustomQuantity] = useState(1);
  const [aboutToReview, setAboutToReview] = useState(false);
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    email: "",
    content: "",
  });
  const [status, setStatus] = useState({ error: false, resInfo: "", loading: false });
  const [validateError, setValidateError] = useState({});

  const starIconRef = useRef();
  const [starIndex, setStarIndex] = useState(4);
  const [emojiRep, setEmojiRep] = useState("");

  // Getting Review
  const [reviews, setReviews] = useState([]);
  const [badge, setBadge] = useState(0);

  const [reviewStatus, setReviewStatus] = useState({ loading: false, error: false });

  const incrementBadgeNum = () => setBadge((prev) => prev + 1);

  useEffect(() => {
    async function getProductReviews() {
      setReviewStatus({ ...reviewStatus, loading: true });
      const res = await fetch(`/api/products/reviews/${post._id}/${badge}`);
      if (!res.ok) {
        setReviewStatus({ ...reviewStatus, loading: false });
        return;
      }

      const reviewsData = await res.json();
      setReviewStatus({ ...reviewStatus, loading: false });
      setReviews(reviewsData);
    }

    getProductReviews();
  }, [badge]);

  const toggleReviewBox = () => setAboutToReview(!aboutToReview);
  const handleStarHovering = (starId) => setStarIndex(starId);

  const emojiRepChanger = () => {
    if (starIndex === 0) {
      setEmojiRep("😥");
    } else if (starIndex === 1) {
      setEmojiRep("😐");
    } else if (starIndex === 2) {
      setEmojiRep("🙂");
    } else if (starIndex === 3) {
      setEmojiRep("😘");
    } else if (starIndex === 4) {
      setEmojiRep("🥰");
    } else {
      setEmojiRep("😶");
    }
  };

  useEffect(() => emojiRepChanger(), [starIndex]);

  const changeQuantity = (type) => {
    switch (type) {
      case "sub":
        if (customQuantity <= 0) return;
        setCustomQuantity((prev) => prev - 1);
      case "add":
        if (customQuantity > 100) return;
        setCustomQuantity((prev) => prev + 1);
      default:
        break;
    }
  };

  const handleFormChange = (e) => setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  const formValidator = () => {
    const errors = {};
    if (!formInputs.fullName) errors.fullName = "Please enter your name";
    if (!formInputs.email) {
      errors.email = "Please enter your email";
    } else if (
      !formInputs.email.includes("@") ||
      formInputs.email.substring(formInputs.email.indexOf("@"), formInputs.email.length) <= 0
    ) {
      // should use RegExp instead
      errors.email = "Invalid email address";
    }
    if (!formInputs.content) errors.content = "Please enter review content/message";

    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    const validator = formValidator();
    setValidateError(validator);

    if (Object.keys(validator).length > 0) {
      setStatus({ ...status, loading: false });
      return;
    }

    const res = await fetch("/api/products/create/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formInputs, stars: starIndex + 1, productId: post._id }),
    });

    if (!res.ok) {
      setStatus({ error: true, loading: false, resInfo: res.statusText });
      return;
    }

    setStatus({ error: false, loading: false, resInfo: "Upload Successful 🎉" });

    setFormInputs({
      fullName: "",
      email: "",
      content: "",
    });
  };

  return (
    <>
      {/* Review Box */}
      <div
        className={`fixed w-full left-0 ${
          aboutToReview ? "h-full bg-opacity-90" : "h-0 bg-opacity-0"
        } duration-300 top-0 overflow-hidden`}
      >
        <div className="absolute top-0 left-0 grid w-full h-full delay-[400] -z-10 blur-bg place-content-center">
          <div className={`rounded-md p-6 relative overflow-hidden ${aboutToReview ? "opacity-100" : "opacity-0"}`}>
            <div
              className={`dark:bg-[#212121] bg-white rounded-md p-4 duration-200 delay-200 shadow-md w-full border-2 md:min-w-[40rem] sm:min-w-[30rem] min-w-[20rem] ${
                aboutToReview ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <div>
                  <h4 className="font-semibold">
                    <span className="text-2xl text-orange-500">Rate</span> {post.itemName}
                  </h4>
                  {status.resInfo && (
                    <p
                      className={`py-1 text-sm font-semibold  ${
                        status.resInfo.startsWith("Upl") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {status.resInfo}
                    </p>
                  )}
                </div>

                <div className="gap-4 my-4 md:grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
                  <div className="grid text-center place-content-center py-4 md:py-0">
                    <span className="text-5xl duration-200">{emojiRep}</span>
                    <div className="flex flex-wrap my-3 space-x-2 text-lg duration-200 cursor-pointer justify-evenly">
                      {Array(5)
                        .fill()
                        .map((_, idx) => (
                          <div key={idx}>
                            <FontAwesomeIcon
                              icon={faStar}
                              ref={starIconRef}
                              className={`duration-200 ${starIndex >= idx ? "text-orange-500" : ""}`}
                              onMouseOver={() => handleStarHovering(idx)}
                            />
                          </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-300 opacity-80">Hover/Click to set stars</p>
                  </div>

                  <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="md:space-y-3 space-y-1">
                      <div>
                        <label className="text-sm" htmlFor="fullName">
                          Full Name:
                        </label>
                        <input
                          type="text"
                          className={`w-full p-2 dark:bg-[#1b1b1b] rounded-md outline-none text-sm placeholder:text-gray-400 ${
                            validateError.fullName && "border border-red-500"
                          }`}
                          placeholder="Enter your fine name"
                          name="fullName"
                          value={formInputs.fullName}
                          onChange={(e) => handleFormChange(e)}
                        />
                        {validateError.fullName && <p className="text-xs text-red-500">{validateError.fullName}</p>}
                      </div>
                      <div>
                        <label className="text-sm" htmlFor="email">
                          Email:
                        </label>
                        <input
                          type="email"
                          className={`w-full p-2 dark:bg-[#1b1b1b] rounded-md outline-none text-sm placeholder:text-gray-400 ${
                            validateError.email && "border border-red-500"
                          }`}
                          placeholder="Enter your email"
                          value={formInputs.email}
                          onChange={(e) => handleFormChange(e)}
                          name="email"
                        />
                        {validateError.email && <p className="text-xs text-red-500">{validateError.email}</p>}
                      </div>
                      <div>
                        <label className="text-sm" htmlFor="content">
                          Content:
                        </label>
                        <textarea
                          rows={6}
                          type="email"
                          className={`w-full p-2 dark:bg-[#1b1b1b] rounded-md outline-none resize-none text-sm placeholder:text-gray-400 ${
                            validateError.content && "border border-red-500"
                          }`}
                          placeholder="Your message goes here..."
                          name="content"
                          value={formInputs.content}
                          onChange={(e) => handleFormChange(e)}
                          maxLength={1024}
                        ></textarea>
                        {validateError.content && <p className="text-xs text-red-500">{validateError.content}</p>}
                      </div>

                      <input
                        type="submit"
                        value={status.loading ? "Uploading..." : "Submit"}
                        disabled={status.loading}
                        className={`w-full py-1 duration-200 border border-orange-500 rounded-md shadow-md hover:bg-orange-500 disabled:hover:bg-transparent hover:text-black ${
                          status.loading ? "opacity-20" : "opacity-100"
                        }`}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={faClose}
              onClick={toggleReviewBox}
              className="absolute top-0 right-0 text-2xl cursor-pointer hover:animate-spin"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="my-4 text-2xl font-extrabold duration-200 md:text-4xl sm:text-3xl">
            {post.itemName}{" "}
            <span className="text-sm font-light">
              posted by{" "}
              <Link href={"https://github.com/benjaminnkem"} target="_blank" passHref>
                <span className="text-orange-500 duration-200 border-b border-transparent hover:border-orange-300">
                  {post.seller[0].username}
                </span>
              </Link>
            </span>
          </h1>
        </div>

        <div className="space-y-4">
          <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Details</h2>
            <div className="mt-2">
              <div className={`${itemDescClass}`}>
                <p>Item Name:</p>
                <p>
                  <span className="font-light">{post.itemName}</span>
                </p>
              </div>
              <div className={`${itemDescClass}`}>
                <p>Is Currently Available: </p>
                <p>
                  <span className="font-light">{post.is_available ? "Yes ✅" : "Out of stock 😐❌"}</span>
                </p>
              </div>
              <div className={`${itemDescClass}`}>
                <p>Category: </p>
                <p>
                  <span className="font-light">{post.category}</span>
                </p>
              </div>

              <div className={`${itemDescClass}`}>
                <p>Quantity:</p>
                <div className="flex items-center space-x-3">
                  <i
                    className="cursor-pointer ri-restart-line"
                    onClick={() => setCustomQuantity(1)}
                    title="Reset Quantity"
                  ></i>

                  <div
                    className="flex items-center justify-center w-8 h-8 text-gray-800 duration-200 bg-orange-200 rounded-md shadow-md cursor-pointer select-none hover:bg-orange-300"
                    onClick={() => changeQuantity("sub")}
                  >
                    -
                  </div>
                  <p>{customQuantity}</p>
                  <div
                    className="flex items-center justify-center w-8 h-8 text-gray-800 duration-200 bg-orange-300 rounded-md shadow-md cursor-pointer select-none hover:bg-orange-400"
                    onClick={() => changeQuantity("add")}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className={`${itemDescClass}`}>
                <p>Price:</p>
                <p>
                  <span className="text-xl">
                    {customQuantity} x ${post.price} = ${customQuantity * parseInt(post.price)}
                  </span>
                </p>
              </div>

              <div className="mt-2 md:text-right">
                <AddProductDetCart post={post} customQuantity={customQuantity} />
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white shadow-md dark:bg-[#1a1a1a] p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Ratings</h2>
            <div className="mt-2">
              <ReviewsManager reviews={reviews} reviewStatus={reviewStatus} />

              <button
                className="px-4 py-2 mt-4 duration-100 block border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black"
                onClick={toggleReviewBox}
              >
                Review Product 😏
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdDetails;
