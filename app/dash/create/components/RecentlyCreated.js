"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const RecentProductsCreated = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    try {
      const getRecentPosts = async () => {
        const res = await axios.get(`/api/recent-posts`);
        if (res.statusText.toLocaleLowerCase() !== "ok") return;

        await new Promise((resolve) => setTimeout(() => resolve(), 5000));
        setRecentPosts(res.data);
      };

      getRecentPosts();
    } catch (e) {
      console.log(e);
    }
  }, []);
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
            <div >
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentProductsCreated;
