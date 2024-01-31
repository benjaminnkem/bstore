"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { useStore } from "@/lib/store/auth-provider";
import Image from "next/image";
import { TransitionFromBottom, TransitionParent } from "@/lib/utils/transition";
import { publicApi } from "@/lib/config/axios-instance";

const RecentProductsCreated = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [fetchingRecentPosts, setFetchingRecentPosts] = useState(false);

  const { user } = useStore();

  const getRecentPosts = async (userId) => {
    try {
      setFetchingRecentPosts(true);
      console.log("process.env", process.env);

      const res = await publicApi.get(`/get-recent-posts/${userId ?? ""}`);

      setRecentPosts(res.data);
    } catch (e) {
      toast.error("Couldn't fetch recent products");
    } finally {
      setFetchingRecentPosts(false);
    }
  };

  return (
    <>
      <div>
        <h2 className="py-2 text-2xl font-extrabold">Recent</h2>
        {recentPosts && (
          <TransitionParent addClass="space-y-2">
            {recentPosts.map((product) => (
              <TransitionFromBottom
                key={product._id}
                addClass="p-2 rounded-2xl dark:bg-primaryDarkShade-200 bg-white shadow-md flex gap-2 items-center"
              >
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src={product.images[0]}
                    width={100}
                    height={100}
                    alt={product.itemName}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-grow">
                  <p className="">{product.itemName}</p>
                  <p className="text-sm font-semibold">{new Date(product.date_posted).toUTCString()}</p>
                </div>
              </TransitionFromBottom>
            ))}
          </TransitionParent>
        )}

        {fetchingRecentPosts && (
          <div className="py-4">
            <BarLoader color="#ea580c" />
          </div>
        )}

        {!fetchingRecentPosts && (
          <button
            className="w-full py-2 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-orange-500 hover:text-black"
            onClick={() => getRecentPosts(user.id ?? "")}
            disabled={fetchingRecentPosts}
          >
            Get Recent Post
          </button>
        )}
      </div>
    </>
  );
};

export default RecentProductsCreated;
