import React, { useRef, useState } from "react";

const BasicUseRef = () => {
  const myRef = useRef("Hello world");

  const [stateCount, setStateCount] = useState<number>(0);
  const refCount = useRef<number>(0);

  const incrementCount = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref count: ${refCount.current}`);
  };

  return (
    <div className="container bg-neutral-800">
      <h1>useRef</h1>
      <p>myRef: {myRef.current}</p>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row items-center gap-2">
          <p className="w-32 flex-none">stateCount: {stateCount}</p>
          <button onClick={incrementCount}>Increment Count</button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="w-32 flex-none">refCount: {refCount.current}</p>
          <button onClick={incrementRefCount}>Increment RefCount</button>
        </div>
      </div>
    </div>
  );
};

export default BasicUseRef;
