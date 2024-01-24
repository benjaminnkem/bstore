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
  starIconRef,
  handleFormChange,
  updateContextLength,
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
                <div className="z-50 gap-4 my-4 md:grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
                  <div className="grid py-4 text-center select-none place-content-center md:py-0">
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
                    <p className="text-xs text-gray-800 dark:text-gray-300 opacity-80">Hover/Click to set stars</p>
                  </div>

                  <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="space-y-1 md:space-y-3">
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
                <div className="grid w-full h-full my-4 place-content-center">
                  <div className="py-4 space-y-4 md:py-2">
                    <div>
                      <Link href={`/account/signup`} passHref>
                        <button className="flex items-center px-4 py-2 mx-auto space-x-2 duration-200 border-2 rounded-md hover:bg-orange-500">
                          <span>Create an account</span> <FontAwesomeIcon icon={faUser} />
                        </button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <span className="h-[1px] bg-white opacity-40 w-full"></span>
                      <span>Or</span>
                      <span className="h-[1px] bg-white opacity-40 w-full"></span>
                    </div>
                    <div>
                      <Link href={`/account/login`} passHref>
                        <button className="flex items-center px-4 py-2 mx-auto space-x-2 duration-200 border-2 rounded-md hover:bg-orange-500">
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
            className="absolute top-0 right-0 text-3xl text-gray-500 cursor-pointer hover:animate-spin dark:text-gray-50"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
