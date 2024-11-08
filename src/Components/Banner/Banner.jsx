import { useNavigate } from "react-router-dom";
import Bannerimg from "../../assets/banner.jpg";
import Heading from '../Heading';


const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mb-52">
      <div className="min-h-[500px] bg-purple-500 rounded-b-lg p-2">
        <div className="flex flex-col items-center text-center text-white hero-content">
          <div>
            <Heading
              title="Stay Ahead with Our Latest Tech Gadgets and Accessories!"
              subtitle="Discover cutting-edge devices that keep you on the forefront of technology. Experience the future with Gadget Heaven."
            />
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-2 font-bold text-purple-500 transition bg-white rounded-full shadow-md hover:bg-purple-600 hover:text-white"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <img
          className="w-full h-full border-8 rounded-lg border-stone-20"
          src={Bannerimg}
          alt="VR Headset"
        />
      </div>
    </div>
  );
};

export default Banner;
