import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NormalForm from "./NormalForm.tsx";
import FormwithReactHook from "./FormwithReactHook.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NormalForm />
    <FormwithReactHook />
  </StrictMode>
);
