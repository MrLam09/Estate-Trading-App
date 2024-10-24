import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import SingleEstInf from "../pages/home/SingleEstInf.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import ManageEst from "../dashboard/manageEst/ManageEst.jsx";
import AddEst from "../dashboard/addEst/AddEst.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/Login",
                element: <Login/>,
            },
            {
                path: "/Register",
                element: <Register/>,
            },
            {
                path: "/estateinf/:id",
                element: <SingleEstInf/>,
            },
        ],
    },
    {
        path: "/Admin",
        element: <AdminLogin/>,
    },
    {
        path: "/Dashboard",
        element: <AdminRoute>
            <DashboardLayout/>
        </AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><Dashboard/></AdminRoute>,
            },
            {
                path: "add-new-ets-inf",
                element: <AdminRoute>
                    <AddEst/>
                </AdminRoute>,
            },
            {
                path: "edit-ets-inf/:id",
                element: <AdminRoute><div>Admin edit-ets-inf</div></AdminRoute>,
            },
            {
                path: "manager-ets-infs",
                element: <AdminRoute><ManageEst/></AdminRoute>,
            },

        ]
    }
]);

export default router;