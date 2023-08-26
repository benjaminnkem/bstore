"use client";
import { faClose, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const HomeToAd = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div
        className={`w-full bg-green-900 text-white flex space-x-3 ease-linear justify-center items-center relative duration-300 overflow-hidden ${
          visible ? "h-16" : "h-[.05px]"
        }`}
      >
        <p className="uppercase">Up to 50% off only for a limited time!</p>
        <Link href={"/shop"} passHref>
          <button className="px-3 py-1 duration-200 bg-green-600 border border-green-600 rounded-md hover:bg-green-800">
            Shop Now! <FontAwesomeIcon icon={faShop} />
          </button>
        </Link>

        <div className="absolute top-0 grid h-full right-4 place-content-center">
          <FontAwesomeIcon
            icon={faClose}
            title="Close"
            className="text-lg duration-200 cursor-pointer"
            onClick={() => setVisible(false)}
          />
        </div>
      </div>
    </>
  );
};

export default HomeToAd;
