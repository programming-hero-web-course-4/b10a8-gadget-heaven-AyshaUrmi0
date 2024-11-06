import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { CartContext } from "../Components/CardContext";


const UpdateTitle = () => {
    const location = useLocation();
    const getTitleForRoute = (path) => {
        switch (path) {
          case '/dashboard':
            return 'Dashboard';
          case '/statistics':
            return 'Statistics';
          case '/support':
            return 'Support';
          case '/':
          case '/home':
            return 'Home';
          default:
            return 'GadgetGrid';
        }
      };
   
  return (
    <Helmet>
      <title>{`${getTitleForRoute(location.pathname)} | GadgetGrid`}</title>
    </Helmet>
  );
};
 



const InitialLayout = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    toast.success("Product added to cart");
  };

  const handleAddToWishlist = () => {
    setWishlistCount((prev) => prev + 1);
    toast.success("Product added to wishlist");
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        wishlistCount,
        handleAddToCart,
        handleAddToWishlist,
      }}
    >
      <div className="flex flex-col min-h-screen">
        <UpdateTitle />
        <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
        <ToastContainer position="top-center" />

        <main className="container flex-grow mx-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default InitialLayout;
