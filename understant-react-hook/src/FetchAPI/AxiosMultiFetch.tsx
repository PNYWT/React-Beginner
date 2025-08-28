import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const AxiosMultiFetch = () => {
  type Todo = {
    title: string;
    userId: number;
    completed: boolean;
    id: number;
  };

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const [dataTodo, setDataTodo] = useState<Todo | null>(null);
  const [dataPosts, setDataPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [todoRes, postsRes] = await Promise.all([
          axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1"),
          axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts"),
        ]);

        console.log("Todo Fetch success -> ", todoRes.data);
        console.log("Posts Fetch success -> ", postsRes.data);

        setDataTodo(todoRes.data);
        setDataPosts(postsRes.data);
      } catch (err) {
        const axiosErr = err as AxiosError;
        console.error("Axios error:", axiosErr.message);
        setError(new Error(axiosErr.message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Multiple Get Axios</h1>
        <div>
          <h2>Object</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : !dataTodo ? (
            <p>No Data</p>
          ) : (
            <ul>
              <li>Title: {dataTodo.title}</li>
              <li>Todo id: {dataTodo.id}</li>
              <li>Completed: {dataTodo.completed ? "✅ true" : "❌ false"}</li>
              <li>User id: {dataTodo.userId}</li>
            </ul>
          )}
        </div>
        <div className="bg-amber-200">
          <h2>Array Object</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : !dataPosts || dataPosts.length === 0 ? (
            <p>No data</p>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {dataPosts.slice(0, 3).map((post) => (
                <div className="m-2 bg-gray-300">
                  <li key={`title-${post.id}`}>
                    <strong>Title:</strong> {post.title}
                  </li>
                  <li key={`user-${post.id}`}>
                    <strong>User ID:</strong> {post.userId}
                  </li>
                  <li key={`id-${post.id}`}>
                    <strong>Post ID:</strong> {post.id}
                  </li>
                  <li key={`body-${post.id}`}>
                    <strong>Body:</strong> {post.body}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AxiosMultiFetch;
