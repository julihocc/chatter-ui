import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Home } from "./home/Home";
import { Guard } from "../components/auth/Guard";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: (
      <Guard>
        <Home />
      </Guard>
    ),
  },
]);

export default router;
