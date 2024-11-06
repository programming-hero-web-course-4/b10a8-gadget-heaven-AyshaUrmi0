import Heading from "../Components/Heading";


const Dashboard = () => {
    return (
        <div className="min-h-[500px] bg-purple-500 rounded-b-lg p-2">
        <div className="flex flex-col items-center text-center text-white hero-content">
          <div>
          <Heading
              title="Dashboard"
              subtitle="Discover cutting-edge devices that keep you on the forefront of technology. Experience the future with Gadget Heaven."
            />
           
          </div>
        </div>
      </div>
    );
};

export default Dashboard;