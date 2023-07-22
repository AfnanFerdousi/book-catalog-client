import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            // {
            //     path: "/all-books", 
            //     element: 
            // },
            {
                path: "/book/:id", 
                element: <SingleBook/>
            }
        ]
}
])

export default router;