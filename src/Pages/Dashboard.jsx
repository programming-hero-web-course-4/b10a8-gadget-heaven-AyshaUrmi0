import { useContext, useState } from "react";
import { CartContext } from '../Components/CardContext';
import Heading from "../Components/Heading";

const Dashboard = () => {
    const { cart=[], wishlist=[], handleRemoveFromCart, handleRemoveFromWishlist } = useContext(CartContext);
    const [activeTab, setActiveTab] = useState("cart"); 
   
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

    return (
        <div className="min-h-screen p-8 text-center bg-purple-500">
          <div className="mb-6 text-center text-white">
          <Heading title="Dashboard" subtitle="Manage your cart and wishlist items here."/>
          </div>
            
            {/* Tab Buttons */}
            <div className="flex items-center justify-center mb-6 space-x-4">
                <button
                    onClick={() => setActiveTab("cart")}
                    className={`px-4 py-2 ${activeTab === "cart" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
                >
                    Cart
                </button>
                <button
                    onClick={() => setActiveTab("wishlist")}
                    className={`px-4 py-2 ${activeTab === "wishlist" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
                >
                    Wishlist
                </button>
            </div>

           
            {activeTab === "cart" && (
                <div>
                    <h3 className="mb-4 text-xl font-semibold">Cart</h3>
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((product) => (
                                <div key={product.product_id} className="flex items-center justify-between mb-4">
                                    <p>{product.product_title} - ${product.price}</p>
                                    <button
                                        onClick={() => handleRemoveFromCart(product.product_id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className="mt-4">
                                <h4 className="font-semibold">Total Price: ${totalPrice}</h4>
                            </div>
                        </div>
                    ) : (
                        <p>No items in the cart.</p>
                    )}
                </div>
            )}

           
            {activeTab === "wishlist" && (
                <div>
                    <h3 className="mb-4 text-xl font-semibold">Wishlist</h3>
                    {wishlist.length > 0 ? (
                        <div>
                            {wishlist.map((product) => (
                                <div key={product.product_id} className="flex items-center justify-between mb-4">
                                    <p>{product.product_title}</p>
                                    <button
                                        onClick={() => handleRemoveFromWishlist(product.product_id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No items in the wishlist.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
