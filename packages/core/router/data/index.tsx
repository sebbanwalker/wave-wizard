import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "@sebban/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
