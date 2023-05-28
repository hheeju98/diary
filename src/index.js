import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import App from "./App";
import ReactDOM from "react-dom/client";
import Input from "./components/Input";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  { path: "/new", element: <Input /> },
  { path: "/detail/:id", element: <Detail /> },
  { path: "/edit/:id", element: <Edit /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
