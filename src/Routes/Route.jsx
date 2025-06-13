import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../components/Error";
import Home from "../components/Home";
import Users from "../Pages/Users";
import Posts from "../Pages/Posts";
import About from "../Pages/About";
import POstdetails from "../Pages/POstdetails";
import Signup from "../Pages/Signup";
import Products from "../Pages/Products";
import Login from "../Pages/Login"; // ✅ Ensure this is default import
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ use 'element', not 'Component'
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: (
          <Privateroute>
            <Users />
          </Privateroute>
        )
      },
      {
        path: "products",
        loader: () => fetch("https://fakestoreapi.com/products"),
        element: (
          <Privateroute>
            <Products />
          </Privateroute>
        )
      },
      {
        path: "postes",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: (
          <Privateroute>
            <Posts />
          </Privateroute>
        )
      },
      {
        path: "post/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <POstdetails />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login /> // ✅ This is valid now
      }
    ]
  }
]);
