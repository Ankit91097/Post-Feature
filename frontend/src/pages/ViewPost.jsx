import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const ViewPost = () => {
  const [posts, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setPosts(response.data.post); // make sure backend returns { post: [...] }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
        All Posts
      </h2>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <Post key={i} image={post.url} caption={post.caption} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No posts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewPost;
