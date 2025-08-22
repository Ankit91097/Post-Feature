import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // 🟢 FormData banao
      const formData = new FormData();
      formData.append("file", data.file[0]); // file ek array hoti hai FileList me
      formData.append("caption", data.caption);

      // 🟢 API call with form-data
      await axios.post("https://post-feature-j6f8.onrender.com/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Post Created Successfully!");
      reset();
      navigate('/posts')
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Create a Post
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* File Upload */}
          <div>
            <label className="block mb-2 text-gray-300">Upload File</label>
            <input
              type="file"
              {...register("file", { required: "File is required" })}
              className="block w-full text-gray-300 bg-slate-800 border border-slate-700 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.file && (
              <p className="text-red-400 text-sm mt-1">{errors.file.message}</p>
            )}
          </div>

          {/* Caption */}
          <div>
            <label className="block mb-2 text-gray-300">Caption</label>
            <textarea
              {...register("caption", {
                required: "Caption is required",
                minLength: {
                  value: 3,
                  message: "Caption must be at least 3 characters",
                },
              })}
              placeholder="Write your caption..."
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white resize-none"
              rows="3"
            ></textarea>
            {errors.caption && (
              <p className="text-red-400 text-sm mt-1">
                {errors.caption.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
