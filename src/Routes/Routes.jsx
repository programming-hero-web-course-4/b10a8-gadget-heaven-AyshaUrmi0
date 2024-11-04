import { createBrowserRouter } from "react-router-dom";

import InitialLayout from "../InitialLayout/InitialLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Support from "../Pages/Support";

const route=createBrowserRouter([
    {
        path:'/',
        element:<InitialLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/statistics',
                element:<Statistics />
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            },
            {
                path:'/support',
                element:<Support />
            }
        ]
    }
]);


export default route;