import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Layout/Admin/Login";
import DashBoard from "./Components/Layout/Admin/DashBoard";
import ProtectedRoute from "./Components/Layout/Admin/ProtectedRoute";
import PublicAdminRoute from "./Components/Layout/Admin/publicAdminRoute";


const routes = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/admin/login",
        element: (
            <PublicAdminRoute>
                <Login/>
            </PublicAdminRoute>
        ) ,
    },
    {
        path:"/admin/dashboard",
        element:(
            <ProtectedRoute>
                <DashBoard />
            </ProtectedRoute>
        ),
    }
])


export default routes