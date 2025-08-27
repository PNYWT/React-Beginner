import axios from "axios";
import { useState, useEffect } from "react";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TextExample1() {
  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      const json = await response.data;
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      TextExample1
      <div className="section-container">
        {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default TextExample1;
