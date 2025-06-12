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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            { index: true, Component: Home },
            {
                path: 'users',
                loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
                Component: Users
            },
            {
                path: 'products',
                loader: () => fetch("https://fakestoreapi.com/products"),
                Component: Products
            },
            {
                path: 'postes',
                loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
                Component: Posts
            },
            {
                path: "/post/:id",
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
                Component: POstdetails
            },
            { path: 'about', Component: About },
            {
                path: "signup",
                Component: Signup
            }
        ]
    },
]);