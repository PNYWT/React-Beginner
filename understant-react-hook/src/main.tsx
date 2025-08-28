import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BasicUseEffect from "./useEffect/BasicUseEffect.tsx";
import ParentComponente from "./useEffect/ParentComponente.tsx";
import TimeClock from "./useEffect/TimeClock.tsx";
import BasicUseState from "./useState/BasicUseState.tsx";
import BasicUseRef from "./useRef/BasicUseRef.tsx";
import TextFieldFocus from "./useRef/TextFieldFocus.tsx";
import BasicUseContext from "./useContext/BasicUseContext.tsx";
import BasicFetchAPI from "./FetchAPI/BasicFetchAPI.tsx";
import LoadingandError from "./FetchAPI/LoadingandError.tsx";
import FetchAPIwithAxios from "./FetchAPI/FetchAPIwithAxios.tsx";
import AxiosMultiFetch from "./FetchAPI/AxiosMultiFetch.tsx";
import PostwithAxios from "./FetchAPI/PostwithAxios.tsx";
import AxiosUsingInterceptors from "./FetchAPI/AxiosUsingInterceptors.tsx";
import UseCaustomAxios from "./FetchAPI/CustomAxios/UseCaustomAxios.tsx";

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
    <div className="container bg-blue-400">
      <BasicUseContext />
    </div>
    <div className="container bg-orange-400">
      <BasicFetchAPI />
      <LoadingandError />
      <FetchAPIwithAxios />
      <AxiosMultiFetch />
      <PostwithAxios />
      <AxiosUsingInterceptors />
      <UseCaustomAxios />
    </div>
  </StrictMode>
);
