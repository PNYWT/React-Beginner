import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const FetchAPIwithAxios = () => {
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
    const fetchTodo = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Todo>(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log("Axios Response ", res);
        setDataTodo(res.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        console.error("Axios error:", axiosError.message);
        setError(new Error(axiosError.message));
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4 text-black">
        <h1>Fetch with Axios</h1>
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

export default FetchAPIwithAxios;
