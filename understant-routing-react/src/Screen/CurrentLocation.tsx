import React from "react";
import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  console.log("Query Params:", queryParams.get("q"));
  return <div>CurrentLocation Path: {location.pathname}</div>;
};

export default CurrentLocation;
