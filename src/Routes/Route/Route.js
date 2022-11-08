import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Services from "../../components/Services/Services";
import Main from "../../Layouts/Main";

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
            }
        ]
    }
])