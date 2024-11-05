import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";

const CardCategory = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
   
console.log(data);

const product = data.find(item => item.product_id === Number(product_id));


    if (!product) {
        console.warn("Product not found with ID:", product_id);
        return <p className="text-center text-red-500">Product not found.</p>;
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen mb-20 bg-gray-100">
       
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
    
               
                <div className="md:w-2/3 md:ml-8">
                    <h2 className="text-3xl font-semibold text-gray-800">{product.product_title}</h2>
                    <p className="mt-2 text-xl font-bold text-green-600">Price: ${product.price.toFixed(2)}</p>
                    <p className="mt-2 text-gray-700">{product.description}</p>
    
                   
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800">Specification:</h3>
                        <ul className="list-disc list-inside">
                            {product.Specification.map((spec, index) => (
                                <li key={index} className="text-gray-600">{spec}</li>
                            ))}
                        </ul>
                    </div>
    
                   
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
    
                   
                    <div className="flex mt-6">
                        <div className="flex items-center mr-4">
                        <button className="px-4 py-2 mr-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">Add to Cart
                        <button className="w-8 h-8 p-2 text-purple-500 rounded-full bg-white-500">
       <img className='' src="https://img.icons8.com/?size=48&id=mlzugiBNw6GO&format=png" alt="" />
        </button>
                        </button>
                        </div>
                        <button className="w-8 h-8 p-2 text-purple-500 bg-white rounded-full">
         <img src="https://img.icons8.com/?size=48&id=86721&format=png" alt="" />
        </button>                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default CardCategory;
