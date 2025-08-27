import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TextExample1 from "./TextExample1.tsx";
import TextExample2 from "./TextExample2.tsx";
import Question2 from "./Question2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TextExample1 />
    <TextExample2 />
    <Question2 />
  </StrictMode>
);
