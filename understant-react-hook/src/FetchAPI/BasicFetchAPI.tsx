import React, { useEffect, useState } from "react";

const BasicFetchAPI = () => {
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

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json: Todo = await res.json();
        console.log("Todo Fetch success -> ", json);
        setDataTodo(json);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    const fetchArrayObject = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json: Post[] = await res.json();
        console.log("Posts Fetch success -> ", json);
        setDataPosts(json);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchTodo();
    fetchArrayObject();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Basic Fetch API</h1>
        <div>
          <h2>Object</h2>
          {!dataTodo ? (
            <p>Loading...</p>
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
          {dataPosts === null ? (
            <p>Loading...</p>
          ) : dataPosts.length === 0 ? (
            <p>No posts found</p>
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

export default BasicFetchAPI;
