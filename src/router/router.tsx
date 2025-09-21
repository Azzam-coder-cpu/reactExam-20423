import { createBrowserRouter } from "react-router";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
    {
    path: "/login",
    element: <Login />
  },
    {
    path: "/home",
    element: (
        <ProtectedRoute>
    <Home />
    </ProtectedRoute>)
  },
    {
    path: "/product/:id",
    element: (
        <ProtectedRoute>
    <ProductDetails />
    </ProtectedRoute>)
  },
    {
    path: "*",
    element: <div>404 Not Found</div>
  }
  
]);

export default router