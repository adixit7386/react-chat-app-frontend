import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import User from "./redux/exportUser";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const App = () => {
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
      element: <Home />,
      // element: User != null ? <Home /> : <Navigate replace to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
