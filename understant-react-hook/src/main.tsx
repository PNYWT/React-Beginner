import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BasicUseEffect from "./useEffect/BasicUseEffect.tsx";
import ParentComponente from "./useEffect/ParentComponente.tsx";
import TimeClock from "./useEffect/TimeClock.tsx";
import BasicUseState from "./useState/BasicUseState.tsx";
import BasicUseRef from "./useRef/BasicUseRef.tsx";
import TextFieldFocus from "./useRef/TextFieldFocus.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BasicUseState />
    <div className="container bg-slate-400">
      <BasicUseEffect />
      <ParentComponente />
      <TimeClock />
    </div>
    <div className="container bg-slate-700">
      <BasicUseRef />
      <TextFieldFocus />
    </div>
  </StrictMode>
);
