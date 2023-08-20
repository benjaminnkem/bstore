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
        className={`w-full bg-orange-700 text-white flex space-x-3 ease-linear justify-center items-center relative duration-300 overflow-hidden ${
          visible ? "h-20" : "h-[.05px]"
        }`}
      >
        <p className="uppercase">Up to 50% off only for a limited time!</p>
        <Link href={"/shop"} passHref>
          <button className="py-1 px-3 bg-orange-600 border border-orange-600 duration-200 hover:bg-orange-800 rounded-md">
            Shop Now! <FontAwesomeIcon icon={faShop} />
          </button>
        </Link>

        <div className="absolute h-full right-4 grid place-content-center top-0">
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