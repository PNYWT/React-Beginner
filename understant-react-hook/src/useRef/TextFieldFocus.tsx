import React, { useRef, useState } from "react";

const TextFieldFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  const focusInput = () => {
    if (inputRef.current) {
      const inputEl = inputRef.current;
      inputEl.focus();

      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 3000);
    }
  };

  return (
    <div className="container bg-neutral-800">
      <h1>TextFieldFocus</h1>
      <div className="flex justify-center gap-2 m-4">
        <button onClick={focusInput}>Focus</button>
        <input
          type="text"
          ref={inputRef}
          placeholder="Input something"
          className={`border-2 p-2 rounded-lg w-full outline-none text-black bg-white
            ${
              isBlinking
                ? "animate-[blink_1s_ease-in-out_3]"
                : "border-gray-400"
            }`}
        />
      </div>
    </div>
  );
};

export default TextFieldFocus;
