import React from "react";
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import "./index.css";

import App from "./App";
import About from "./About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,

    },
    {
        path: "/about",
        element: <About />
      },
  ]);

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <RouterProvider router={router} />
);
