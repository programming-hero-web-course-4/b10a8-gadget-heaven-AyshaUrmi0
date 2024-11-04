import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";


const InitialLayout = () => {
    return (
        <div className="">
          
           <div className="">
           <Navbar />
           </div>

            
                <div className="container min-h-screen mx-auto p-x-12">
                    <Outlet>

                    </Outlet>

                </div>
           
             <div className="">
             <Footer />
             </div>
        </div>
    );
};

export default InitialLayout;