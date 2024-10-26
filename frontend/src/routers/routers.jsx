import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
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
import UpdateEts from "../dashboard/editEst/UpdateEts.jsx";
import UserDashboard from "../components/UserDashboard.jsx";
import NonAdminAddEts from "../nonAdminDashboard/nonAdminAddEts.jsx";

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
            {
                path: "/user-dashboard",
                element: <PrivateRoute><UserDashboard/></PrivateRoute>,
                children: [
                    {
                        path: "add-new-ets",
                        element: <PrivateRoute><NonAdminAddEts/></PrivateRoute>,
                    },
                    
                ]
            }
        ],
    },
    {
        path: "/admin",
        element: <AdminLogin/>,
    },
    {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout/></AdminRoute>,
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
                element: <AdminRoute><UpdateEts/></AdminRoute>,
            },
            {
                path: "manager-ets-infs",
                element: <AdminRoute><ManageEst/></AdminRoute>,
            },

        ]
    }
]);

export default router;