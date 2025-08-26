import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BasicUseEffect from "./useEffect/BasicUseEffect.tsx";
import ParentComponente from "./useEffect/ParentComponente.tsx";
import TimeClock from "./useEffect/TimeClock.tsx";
import BasicUseState from "./useState/BasicUseState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BasicUseState />
    <BasicUseEffect />
    <ParentComponente />
    <TimeClock />
  </StrictMode>
);
