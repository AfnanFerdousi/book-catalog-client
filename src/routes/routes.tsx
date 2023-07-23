import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import MainLayout from "../layouts/MainLayout";
import EditBook from './../pages/EditBook';
import AllBooks from "../pages/AllBooks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/books",
                element: <AllBooks/>
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
            },
            {
                path: "/editBook/:id",
                element: <EditBook/>,
            },
            {
                path: "/login",
                element: <SignIn/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            }
        ],
    },
]);

export default router;