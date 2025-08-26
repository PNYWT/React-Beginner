import React from "react";
import { useState } from "react";
import MouseTacker from "./MouseTacker";

const ParentComponente = () => {
  const [showMouseTracker, setShowMouseTracker] = useState<boolean>();

  const toggleMouseTrack = () => {
    setShowMouseTracker(!showMouseTracker);
  };

  return (
    <div className="container bg-indigo-400">
      <div className=" flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-white">ParentComponente</h1>
        <button onClick={toggleMouseTrack}>
          {showMouseTracker ? "Unmount Tracker" : "Mount Tracker"}
        </button>

        {showMouseTracker && <MouseTacker />}
      </div>
    </div>
  );
};

export default ParentComponente;
