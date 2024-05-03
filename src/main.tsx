import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import Services from "./pages/Services.tsx";
import Layout from "./Layout.tsx";
import Contacto from "./pages/Contact.tsx";
import About from "./pages/AboutUs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/servicios",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nosotros",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
