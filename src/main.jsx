import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import PropertiesPage from "./Pages/Properties/PropertiesPage";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import ContactPage from "./Pages/Contact/ContactPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/Task_2/",
    element: <App />, 
    children: [
      {
        path: "/Task_2/",
        element: <Home />,
      },
      {
        path: "/Task_2/properties",
        element: <PropertiesPage />,
      },
      {
        path: '/Task_2/propertydetails',
        element: <PropertyDetails />,  
      },
  
      {
        path: "/Task_2/contact",
        element: <ContactPage />,  
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
