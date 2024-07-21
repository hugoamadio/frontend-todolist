import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes