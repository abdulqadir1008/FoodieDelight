import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import RestaurantRegistration from "./pages/RestaurantRegistration";
import RestaurantList from "./pages/RestaurantList";
import { RestaurantProvider } from "./component/RestaurantContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "RestaurantRegistration",
    element: <RestaurantRegistration />,
  },
  {
    path: "RestaurantList",
    element: <RestaurantList />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RestaurantProvider>
        <RouterProvider router={router} />
      </RestaurantProvider>
    </React.StrictMode>
  );
}

export default App;
