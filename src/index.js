import React from "react";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from "./pages/Error";
import App from "./App";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
