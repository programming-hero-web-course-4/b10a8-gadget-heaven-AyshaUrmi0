import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;


  const navbarBgClass = isActive('/') ? 'bg-purple-500 text-white' : 'bg-white text-purple-500';

  return (
    <nav className={`flex items-center justify-between p-4 rounded-t-lg ${navbarBgClass}`}>
      <h1 className="text-xl font-bold">Gadget Heaven</h1>
      <div className="flex gap-6">
        <Link
          to="/"
          className={`px-3 py-2 rounded ${isActive('/home') ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
        >
          Home
        </Link>
        <Link
          to="/statistics"
          className={`px-3 py-2 rounded ${isActive('/statistics') ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
        >
          Statistics
        </Link>
        <Link
          to="/dashboard"
          className={`px-3 py-2 rounded ${isActive('/dashboard') ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
        >
          Dashboard
        </Link>
        <Link
          to="/support"
          className={`px-3 py-2 rounded ${isActive('/support') ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
        >
          Support
        </Link>
      </div>
      <div className="flex gap-4">
        <button className="w-8 h-8 p-2 text-purple-500 bg-white rounded-full">
       <img className='' src="https://img.icons8.com/?size=48&id=mlzugiBNw6GO&format=png" alt="" />
        </button>
        <button className="w-8 h-8 p-2 text-purple-500 bg-white rounded-full">
         <img src="https://img.icons8.com/?size=48&id=86721&format=png" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
