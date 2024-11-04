import Banner from "../Components/Banner/Banner";
import AllCategory from '../Components/Allcategory/Allcategory';
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const CategoryName = useLoaderData();

    return (
        <>
            <Banner />

           
            <div className="grid grid-cols-4 gap-4">
               
                <div className="col-span-1">
                    <AllCategory CategoryName={CategoryName} />
                </div>

               
                <div className="col-span-3">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Home;
