import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const handleAddToCart = (product) => {
      console.log("Product:", product); 
      if (!cart.some((item) => item.product_id === product.product_id)) {
        setCart((prevCart) => {
          const newCart = [...prevCart, product];
          console.log("Updated Cart:", newCart); // Log the updated cart state
          return newCart;
        });
      }
    };
    
    const handleAddToWishlist = (product) => {
      console.log("Before Adding Wishlist:", wishlist);  // Log before update
      if (!wishlist.some((item) => item.product_id === product.product_id)) {
        setWishlist((prevWishlist) => {
          const newWishlist = [...prevWishlist, product];
          console.log("Updated Wishlist:", newWishlist);  // Log after update
          return newWishlist;
        });
      }
    };
    
    

    // Remove product from the cart
    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
    };
   
    // Remove product from the wishlist
    const handleRemoveFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.product_id !== productId));
    };
     
    return (
        <CartContext.Provider
            value={{
                cart,
                wishlist,
                handleAddToCart,
                handleAddToWishlist,
                handleRemoveFromCart,
                handleRemoveFromWishlist,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
