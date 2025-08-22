import React from "react";

const Post = ({ image, caption }) => {
  return (
    <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition duration-300 flex flex-col">
      {/* Image */}
      <div className="w-full h-64 bg-slate-800 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt="Post"
          className="max-h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Caption */}
      <div className="p-4 flex-1">
        <p className="text-gray-300 text-base leading-relaxed break-words">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
