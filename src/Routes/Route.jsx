import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../components/Error";
import Home from "../components/Home";
import Users from "../Pages/Users";
import Countrise from "../Pages/Countrise";
import Posts from "../Pages/Posts";
import About from "../Pages/About";

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
            { path: 'countrise', Component: Countrise },
            { path: 'postes', Component: Posts },
            { path: 'about', Component: About },
        ]
    },
]);