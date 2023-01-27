import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const App = () => {
  const User = useSelector((state) => state.user.currentUser);
  console.log(User);
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  // ]);
  const router = createBrowserRouter([
    {
      path: "/",

      element: User !== null ? <Home /> : <Navigate replace to="/login" />,
    },
    {
      path: "/login",
      element: User !== null ? <Navigate replace to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: User !== null ? <Navigate replace to="/" /> : <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
