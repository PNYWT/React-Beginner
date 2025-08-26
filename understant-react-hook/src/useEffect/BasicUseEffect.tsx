import { useState, useEffect } from "react";

function BasicUseEffect() {
  const [count, setCount] = useState<number>(0);

  const [anotherValue, setAnotherValue] = useState<number>(10);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // 1. รันทุกครั้งที่ count เปลี่ยน
  useEffect(() => {
    console.log("useEffect mount or count เปลี่ยน:", count);
  }, [count]);

  /*
  // 2. รันครั้งเดียวตอน mount
  useEffect(() => {
    console.log("Render Done:", count);
  }, []);

  // 3. รันทุกครั้งที่มีการ render
  useEffect(() => {
    console.log("Render Done:", count);
  });
*/

  const updateAnotherValue = () => {
    setAnotherValue(anotherValue + 1);
  };

  useEffect(() => {
    console.log("useEffect Triggered");
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-gray-700">useEffect Hook</h1>
        <button onClick={incrementCount}>Increment: {count}</button>
        <button onClick={updateAnotherValue}>
          AnotherValue: {anotherValue}
        </button>
      </div>
    </div>
  );
}

export default BasicUseEffect;
