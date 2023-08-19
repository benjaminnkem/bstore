"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const RecentProductsCreated = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    try {
      const getRecentPosts = async () => {
        const res = await axios.get(`/api/recent-posts/${session.user.id}`);
        if (res.statusText.toLocaleLowerCase() !== "ok") return;
        console.log(res.data, session.user.id);
        console.log(res.data);
      };

      getRecentPosts();
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }, [session.user.id]);
  return (
    <>
      <div>
        <h2 className="font-extrabold text-2xl py-2">Recent</h2>
        <div>
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.map((post) => {
              <div key={post._id}></div>;
            })
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentProductsCreated;
