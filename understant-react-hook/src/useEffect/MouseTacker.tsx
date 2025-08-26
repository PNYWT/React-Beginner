import React, { use, useEffect } from "react";
import { useState } from "react";

const MouseTacker = () => {
  const [mounsePosition, setMounsePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Mount");
    const handleMouseMove = (event: MouseEvent) => {
      setMounsePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log("Unmount");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container bg-gray-600">
      <div className=" flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-white">Mouse Tracker</h1>
        <h2>
          Mouse Position: X: {mounsePosition.x}, Y: {mounsePosition.y}
        </h2>
      </div>
    </div>
  );
};

export default MouseTacker;
