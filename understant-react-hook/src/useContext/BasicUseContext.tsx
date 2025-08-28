import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<string>("dark");

const BasicUseContext = () => {
  const [theme, setTheme] = useState<string>("dark");

  const changeTheme = () => {
    setTheme((prv) => (prv === "dark" ? "light" : "dark"));
  };

  const { count, increment, decrement, resetCounter } = useCounter(0);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-gray-700">useContext</h1>
        <h2 className="text-gray-700">Parent</h2>
        <button onClick={changeTheme}>Change Theme</button>
        <ThemeContext.Provider value={theme}>
          <ComponentA theme={theme} />
        </ThemeContext.Provider>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-4">
        <h1 className="text-gray-700">Custom Hook</h1>
        <p className="text-gray-700">Count: {count}</p>
        <div className="flex flex-row gap-4">
          <button onClick={increment}>เพิ่ม</button>
          <button onClick={decrement}>ลด</button>
          <button onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </div>
  );
};

// MARK: Normal Passing Props
// - BasicUseContext
//  - ComponentA
//    - ComponentB
//      - ThemedComponent

function ComponentA({ theme }: { theme: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-black p-2">
      <h2 className="text-gray-700">ComponentA (Child)</h2>
      <ComponentB theme={theme} />
    </div>
  );
}

function ComponentB({ theme }: { theme: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-black p-2">
      <h2 className="text-gray-700">ComponentB (Child)</h2>
      <ThemedComponent theme={theme} />
      <ThemedProvider />
    </div>
  );
}

function ThemedComponent({ theme }: { theme: string }) {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-black p-2">
      <h2 className="text-gray-700">ThemedComponent (Great-GrandChild)</h2>
      <p className="text-gray-700">
        <span className="font-bold">Props {"->"}</span> The Current theme:{" "}
        {theme}
      </p>
    </div>
  );
}

// MARK: Passing useContext
function ThemedProvider() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-black p-2">
      <h2 className="text-gray-700">ThemedProvider (Great-GrandChild)</h2>

      <p className="text-gray-700">
        <span className="font-bold">useContext {"->"}</span> The Current theme:{" "}
        {""}
        {themeContext}
      </p>
    </div>
  );
}

// MARK: Custom Hook
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () =>
    setCount((c) => {
      return c === 0 ? c : c - 1;
    });

  const resetCounter = () => setCount(0);

  return { count, increment, decrement, resetCounter };
}

export default BasicUseContext;
