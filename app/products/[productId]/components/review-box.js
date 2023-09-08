import { faClose, faRocket, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ReviewBox = ({
  status,
  aboutToReview,
  emojiRep,
  starIndex,
  handleStarHovering,
  handleFormSubmit,
  formInputs,
  toggleReviewBox,
  contentControl,
  validateError,
  post,
  loginStatus,
  starIconRef
}) => {
  return (
    <div
      className={`fixed w-full z-50 left-0 ${
        aboutToReview ? "h-full bg-opacity-90" : "h-0 bg-opacity-0"
      } duration-300 top-0 overflow-hidden`}
    >
      <div className="absolute top-0 left-0 grid w-full h-full place-content-center backdrop-blur-sm">
        <div className={`rounded-md p-6 relative overflow-hidden ${aboutToReview ? "opacity-100" : "opacity-0"}`}>
          <div
            className={`dark:bg-primaryDarkShade-100 bg-white rounded-md p-4 duration-200 delay-200 shadow-md w-full border-2 md:min-w-[40rem] sm:min-w-[30rem] min-w-[20rem] ${
              aboutToReview ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <div>
                <h4 className="font-semibold">
                  <span className="text-2xl text-orange-500">Review</span> {post.itemName}
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

              {loginStatus === "authenticated" ? (
                <div className="gap-4 my-4 md:grid z-50" style={{ gridTemplateColumns: "1fr 2fr" }}>
                  <div className="grid text-center place-content-center py-4 md:py-0 select-none">
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
                    <p className="text-xs dark:text-gray-300 text-gray-800 opacity-80">Hover/Click to set stars</p>
                  </div>

                  <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="md:space-y-3 space-y-1">
                      {/* <div>
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
                            value={userInfo ? userInfo.username : formInputs.fullName}
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
                            value={userInfo ? userInfo.email : formInputs.email}
                            onChange={(e) => handleFormChange(e)}
                            name="email"
                          />
                          {validateError.email && <p className="text-xs text-red-500">{validateError.email}</p>}
                        </div> */}
                      <div>
                        <label className="font-semibold" htmlFor="content">
                          Review
                        </label>
                        <textarea
                          rows={10}
                          type="email"
                          className={`w-full p-2 dark:bg-[#1b1b1b] bg-[#eee] rounded-md outline-none resize-none text-sm placeholder:text-gray-400 ${
                            validateError.content && "border border-red-500"
                          }`}
                          placeholder="Your message goes here..."
                          name="content"
                          value={formInputs.content}
                          onChange={(e) => {
                            handleFormChange(e);
                            updateContextLength(e);
                          }}
                          maxLength={1024}
                        ></textarea>
                        {validateError.content && <p className="text-xs text-red-500">{validateError.content}</p>}
                        <p className="text-sm text-gray-400 opacity-80">
                          {contentControl.start} / {contentControl.max}
                        </p>
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
              ) : loginStatus === "loading" ? (
                <div>loading...</div>
              ) : (
                <div className="my-4 w-full h-full grid place-content-center">
                  <div className="space-y-4 md:py-2 py-4">
                    <div>
                      <Link href={`/account/signup`} passHref>
                        <button className="px-4 py-2 mx-auto rounded-md border-2 duration-200 flex items-center space-x-2 hover:bg-orange-500">
                          <span>Create an account</span> <FontAwesomeIcon icon={faUser} />
                        </button>
                      </Link>
                    </div>
                    <div className="flex justify-between items-center space-x-2">
                      <span className="h-[1px] bg-white opacity-40 w-full"></span>
                      <span>Or</span>
                      <span className="h-[1px] bg-white opacity-40 w-full"></span>
                    </div>
                    <div>
                      <Link href={`/account/login`} passHref>
                        <button className="px-4 py-2 mx-auto rounded-md border-2 duration-200 flex items-center space-x-2 hover:bg-orange-500">
                          <span>Login</span> <FontAwesomeIcon icon={faRocket} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <FontAwesomeIcon
            icon={faClose}
            onClick={toggleReviewBox}
            className="absolute top-0 right-0 text-3xl cursor-pointer hover:animate-spin text-gray-500 dark:text-gray-50"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
