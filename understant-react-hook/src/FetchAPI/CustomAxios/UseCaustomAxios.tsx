import React from "react";
import { useState } from "react";
import api from "./AxiosAPI";

const UseCaustomAxios = () => {
  type MethodPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const [postRes, setPostRes] = useState<MethodPost | null>(null);

  const createPost = async () => {
    try {
      const newPost = {
        title: "foo2",
        body: "bar",
        userId: 1,
      };
      const res = await api.post("/posts", newPost);

      setPostRes(res.data);
    } catch (err: any) {
      console.error("Axios error ->", err.message);
    }
  };
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Use Caustom Axios</h1>
        <button className="text-white" onClick={createPost}>
          Create Post
        </button>
        <div className="w-26 bg-blue-600 p-2 text-white">
          <p>title: {postRes?.title}</p>
          <p>userId: {postRes?.userId}</p>
          <p>id: {postRes?.id}</p>
          <p>body: {postRes?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default UseCaustomAxios;
