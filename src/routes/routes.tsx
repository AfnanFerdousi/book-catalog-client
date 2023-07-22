import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
}
])

export default router;