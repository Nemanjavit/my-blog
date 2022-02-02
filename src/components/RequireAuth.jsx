import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  console.log("require auth", currentUser);
  if (!currentUser) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return <Outlet />;
}

export default RequireAuth;
