
import App from "@/App";
import Login from "@/components/modules/authentication/Login";
import Register from "@/components/modules/authentication/Register";
import About from "@/pages/About";
import Verify from "@/pages/Verify";

import { createBrowserRouter } from "react-router";

export  const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },

  {

    Component: Login,
    path: "login",
  },
  {
    Component: Register,
    path: "register",
  },
  {
    Component: Verify,
    path: "verify",
  },
]);