import Banner from "../Components/Banner/Banner";
import AllCategory from '../Components/Allcategory/Allcategory';
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const CategoryName = useLoaderData();

    return (
        <>
            <Banner />

           
            <div className="grid grid-cols-5 gap-4">
               
                <div className="col-span-1">
               
                    <AllCategory CategoryName={CategoryName} />
                </div>

               
                <div className="col-span-4">
                <h1 className="mb-4 text-3xl font-bold text-center text-purple-500">All Categories of Our Products</h1>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Home;
