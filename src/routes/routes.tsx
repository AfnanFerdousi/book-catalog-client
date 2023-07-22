import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import MainLayout from "../layouts/MainLayout";
import EditBook from './../pages/EditBook';
import AllBooks from "../pages/AllBooks";

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
        ],
    },
]);

export default router;