import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext } from './CardContext'; // Import the context
import Heading from "./Heading";

const CardCategory = () => {
    const data = useLoaderData();
    const { handleAddToCart, handleAddToWishlist, wishlist } = useContext(CartContext);
    const { product_id } = useParams();
    console.log("CartContext in CardCategory:", { handleAddToCart, handleAddToWishlist, wishlist });
    

    
    const product = data?.find((item) => item.product_id === Number(product_id));
   
    
    
    if (!product) {
        console.warn("Product not found or data not loaded. Product ID:", product_id);
        return <p className="text-center text-red-500">Product not found.</p>;
    }

    
    const isInWishlist = wishlist && wishlist.some((item) => item.product_id === product.product_id);

    return (
        <div className="relative flex flex-col items-center min-h-screen mb-20 bg-gray-100">
            {/* Banner Section */}
            <div className="relative flex items-center justify-center w-full h-64 text-white bg-purple-600">
                <div className="text-center">
                    <Heading title="Product Details" subtitle="Explore the features and specifications of our top-rated gadgets, designed to elevate your tech experience."/>
                </div>
            </div>

           
            <div className="absolute w-full max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg top-48">
                <div className="flex flex-col items-center md:flex-row">
                    
                  
                    <div className="flex justify-center mb-4 md:w-1/3 md:mb-0">
                        <img
                            src={product.product_image}
                            alt={product.product_title}
                            className="object-cover w-64 h-64 border border-gray-300 rounded-md shadow-md"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-2/3 md:ml-8">
                        <h2 className="text-3xl font-semibold text-gray-800">{product.product_title}</h2>
                        <p className="mt-2 text-xl font-bold text-green-600">Price: ${product.price.toFixed(2)}</p>
                        <p className="mt-2 text-gray-700">{product.description}</p>

                        {/* Specifications */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">Specification:</h3>
                            <ul className="list-disc list-inside">
                                {product.Specification.map((spec, index) => (
                                    <li key={index} className="text-gray-600">{spec}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Availability and Rating */}
                        <div className="flex items-center mt-4">
                            <span className={`text-sm font-semibold mr-4 ${product.availability ? "text-green-600" : "text-red-600"}`}>
                                {product.availability ? "In Stock" : "Out of Stock"}
                            </span>
                            <div className="flex items-center">
                                <span className="mr-1 text-yellow-500">Rating</span>
                                <span className="font-semibold text-gray-800">{product.rating}</span>
                                <span className="ml-1 text-gray-500">/ 5</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex mt-6">
                            {/* Add to Cart Button */}
                            <button 
                                onClick={(
                                    
                                ) =>
                                    {
                                        console.log("Add to Cart clicked", product);
                                         handleAddToCart(product)}}
                                className="px-4 py-2 mr-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
                            >
                                Add to Cart
                            </button>

                            {/* Add to Wishlist Button */}
                            <button 
                                onClick={() =>{
                                    console.log("Add to Cart wishlist", product); 
                                    handleAddToWishlist(product)} }
                                className={`w-8 h-8 p-2 ${isInWishlist ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                                disabled={isInWishlist}
                            >
                                <img src="https://img.icons8.com/?size=48&id=86721&format=png" alt="Wishlist Icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCategory;
