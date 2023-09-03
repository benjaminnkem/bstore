"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CustomSessionDataContext } from "../../contexts/DashboardWrapper";
import { toast } from "react-hot-toast";

const RecentProductsCreated = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const userInfoContext = useContext(CustomSessionDataContext);
  const [fetchingRecentPosts, setFetchingRecentPosts] = useState(false);

  const getRecentPosts = async (userId) => {
    try {
      setFetchingRecentPosts(true);
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
              <div key={product._id} className="p-2 rounded-md bg-primaryDarkShade-200">
                <p className="">{product.itemName}</p>
                <p className="text-sm font-semibold">{new Date(product.date_posted).toLocaleString()}</p>
              </div>
            ))}
        </div>

        <button
          className="w-full py-2 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-orange-500 hover:text-black"
          onClick={() => getRecentPosts(userInfoContext?.user?.id)}
          disabled={fetchingRecentPosts}
        >
          {fetchingRecentPosts ? "Loading..." : "Get Recent Post"}
        </button>
      </div>
    </>
  );
};

export default RecentProductsCreated;
