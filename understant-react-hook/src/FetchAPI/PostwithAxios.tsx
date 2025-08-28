import axios from "axios";
import React, { useState } from "react";

const PostwithAxios = () => {
  type MethodPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const [postRes, setPostRes] = useState<MethodPost | null>(null);
  const createPost = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "foo",
          body: "bar",
          userId: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Post success ->", res.data);
      setPostRes(res.data);
    } catch (err: any) {
      console.error("Axios error ->", err.message);
    }
  };
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Method Post with Axios</h1>
        <button className="text-white" onClick={createPost}>
          Create Post
        </button>
        <div className="w-26 bg-blue-600 p-2 text-white">
          <p>title:{postRes?.title}</p>
          <p>userId: {postRes?.userId}</p>
          <p>id: {postRes?.id}</p>
          <p>body: {postRes?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostwithAxios;
