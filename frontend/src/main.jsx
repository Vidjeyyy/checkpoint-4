import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { AppProvider } from "./components/Context/AppContext";

import Root from "./routes/Root";
import MaxLengthProvider from "./context/MaxLengthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EstimationPage from "./pages/EstimationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/estimation",
        element: <EstimationPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StyledEngineProvider injectFirst>
    <MaxLengthProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </MaxLengthProvider>
  </StyledEngineProvider>
);
