import React, { useEffect, useState } from "react";

const LoadingandError = () => {
  type Todo = {
    title: string;
    userId: number;
    completed: boolean;
    id: number;
  };

  const [dataTodo, setDataTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchTodo = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json: Todo = await res.json();
        console.log("Todo Fetch success -> ", json);

        if (res.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        setDataTodo(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err as Error);
      }

      setLoading(false);
    };

    fetchTodo();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Handle Loading and Error</h1>
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
      </div>
    </div>
  );
};

export default LoadingandError;
