import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const MyCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default MyCreateRoute;
