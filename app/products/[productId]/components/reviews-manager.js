import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const ReviewsManager = ({ reviews, reviewStatus }) => {
  const [ratingIndex, setRatingIndex] = useState(null);
  return (
    <div>
      {reviews && reviews?.length > 0 ? (
        <>
          {!reviewStatus.loading && (
            <div className="space-y-2">
              {reviews.map((review, idx) => (
                <div
                  key={review._id}
                  className={`${
                    idx === ratingIndex &&
                    "picked-review grid place-content-center bg-black bg-opacity-60 w-full top-0 left-0 fixed h-full"
                  } duration-300`}
                >
                  <div
                    className={`p-4 border rounded-md border-opacity-25 dark:bg-[#262626] bg-white duration-200 dark:hover:bg-[#383838] hover:bg-gray-50 ${
                      idx === ratingIndex
                        ? "md:max-w-xl w-11/12 mx-auto overflow-y-auto max-h-96"
                        : "cursor-pointer"
                    }`}
                    onClick={() => setRatingIndex(idx)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-5">
                        <Image
                          src={`/images/default/11.png`}
                          alt={`User ${Math.floor(Math.random() * 100)} avatar`}
                          width={50}
                          height={50}
                          className="border-2 rounded-full"
                        />

                        <div>
                          <p className="font-semibold">{review.fullName}</p>
                          <p className="font-semibold">
                            {review.stars}{" "}
                            <FontAwesomeIcon icon={faStar} className="hover:text-orange-500 duration-200" />
                          </p>
                        </div>
                      </div>
                      <p className="whitespace-pre-line text-sm">
                        {idx === ratingIndex && review.content}
                        {idx !== ratingIndex && review.content?.length <= 250
                          ? review.content
                          : `${review.content.substring(0, 250)}...`}
                      </p>
                    </div>
                  </div>

                  {idx === ratingIndex && (
                    <div className="text-center">
                      <button
                        className="px-4 py-2 rounded-lg border-2 hover:bg-orange-500 bg-orange-600 dark:bg-transparent my-2 text-sm hover:text-black duration-200"
                        onClick={() => setRatingIndex(null)}
                      >
                        Close <FontAwesomeIcon icon={faClose} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>{!reviewStatus.loading && <p className="font-light">No ratings.</p>}</>
      )}

      {reviewStatus.loading && <i className="ri-loader-4-line text-4xl animate-spin inline-block"></i>}
    </div>
  );
};

export default ReviewsManager;
