"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CustomSessionDataContext } from "../../../../lib/contexts/dashboard/dashboard-wrapper";
import { toast } from "react-hot-toast";
import { PuffLoader } from "react-spinners";
import { useUserData } from "@/lib/contexts/global/auth-provider";
import Image from "next/image";

const RecentProductsCreated = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const userInfoContext = useContext(CustomSessionDataContext);
  const [fetchingRecentPosts, setFetchingRecentPosts] = useState(false);

  const { user } = useUserData();

  const getRecentPosts = async (userId) => {
    console.log(userId);
    try {
      setFetchingRecentPosts(true);
      setRecentPosts([]);
      const res = await axios.get(`/api/products/get-recent-posts/${userId ? userId : ""}`);

      if (res.statusText.toLocaleLowerCase() !== "ok") {
        toast.error("Couldn't get recent posts");
        setFetchingRecentPosts(false);
        return;
      }

      toast.success("GET recent posts successful", { id: "successToast" });
      setFetchingRecentPosts(false);
      setRecentPosts(res.data);
    } catch (e) {
      toast.error("Couldn't get recent posts");
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <h2 className="py-2 text-2xl font-extrabold">Recent</h2>
        <div className="space-y-2">
          {recentPosts &&
            recentPosts.map((product) => (
              <div
                key={product._id}
                className="p-2 rounded-2xl dark:bg-primaryDarkShade-200 bg-white shadow-md flex gap-2 items-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={product.images[0]}
                    width={100}
                    height={100}
                    alt={product.itemName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <p className="">{product.itemName}</p>
                  <p className="text-sm font-semibold">{new Date(product.date_posted).toUTCString()}</p>
                </div>
              </div>
            ))}
        </div>

        {fetchingRecentPosts && (
          <div className="flex items-center justify-center">
            <PuffLoader color="#ea580c" />
          </div>
        )}

        <button
          className="w-full py-2 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-orange-500 hover:text-black"
          onClick={() => getRecentPosts(user ? user.id : "")}
          disabled={fetchingRecentPosts}
        >
          {fetchingRecentPosts ? "Loading..." : "Get Recent Post"}
        </button>
      </div>
    </>
  );
};

export default RecentProductsCreated;
