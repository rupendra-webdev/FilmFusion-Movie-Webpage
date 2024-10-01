import React from "react";
import Home from "../pages/home/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Header from "./Header";
import Footer from "./Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvshows",
        element: <TvShows />,
      },
    ],
  },
]);

function Main() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Main;
