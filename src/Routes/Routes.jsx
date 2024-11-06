import { createBrowserRouter } from "react-router-dom";

import InitialLayout from "../InitialLayout/InitialLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Support from "../Pages/Support";
import NotFound from "../Components/NotFound";
import DefaultCategories from "../Components/DefaultCategories/DefaultCategories";
import CardCategory from "../Components/CardCategory";

const route = createBrowserRouter([
    {
        path: '/',
        element: <InitialLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/CategoryName.json'), 
                children: [
                    {
                        path: '/',
                        element: <DefaultCategories />,
                        loader: () => fetch('/Category.json') 
                    },
                    {
                        path: 'defaultCategories/:category_name',
                        element: <DefaultCategories />,
                        loader: () => fetch('/Category.json') 
                    },
                    
                ]
            },
            
            {
                path: 'defaultCategories/:category_name/product/:product_id',
                element: <CardCategory />,
                loader: ({ params }) => fetch(`/Category.json`),
            },
            
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                loader: ({ params }) => fetch('/Category.json')
            },
            {
                path: '/support',
                element: <Support />
            }
        ]
    }
]);

export default route;
