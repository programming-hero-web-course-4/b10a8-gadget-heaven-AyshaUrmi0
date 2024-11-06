import { createContext } from "react";

export const CartContext = createContext({
  cartCount: 0,
  wishlistCount: 0,
  handleAddToCart: () => {},
  handleAddToWishlist: () => {},
});
