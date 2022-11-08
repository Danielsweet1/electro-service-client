import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login and Signup/Login/Login";
import SignUp from "../../components/Login and Signup/Signup/SignUp";
import ServiceDetails from "../../components/Services/ServiceDetails/ServiceDetails";
import Services from "../../components/Services/Services";
import Main from "../../Layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])