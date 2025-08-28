import axios from "axios";
import React, { useEffect, useState } from "react";

axios.interceptors.request.use((request) => {
  console.log("👉 Starting Request ->", request);
  //   request.headers.Authorization = "Bearer fake-token";
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("👉 Receive Response ->", response);
  return response;
});

const AxiosUsingInterceptors = () => {
  type MethodPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const [postRes, setPostRes] = useState<MethodPost | null>(null);

  useEffect(() => {
    setPostRes(null);
  }, []);

  const createPost = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "foo",
          body: "bar",
          userId: 1,
        }
      );

      setPostRes(res.data);
    } catch (err: any) {
      console.error("Axios error ->", err.message);
    }
  };
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Using Interceptor</h1>
        <button className="text-white" onClick={createPost}>
          Create Post
        </button>
        <div className="w-26 bg-blue-400 p-2 text-white">
          <p>title: {postRes?.title}</p>
          <p>userId: {postRes?.userId}</p>
          <p>id: {postRes?.id}</p>
          <p>body: {postRes?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default AxiosUsingInterceptors;
