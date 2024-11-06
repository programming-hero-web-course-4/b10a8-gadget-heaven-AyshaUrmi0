import { useLoaderData, useParams, Link } from "react-router-dom";


const DefaultCategories = () => {
    const data = useLoaderData();
    const { category_name  } = useParams();
    
    

    const filteredData = Array.isArray(data)
        ? (category_name
            ? data.filter(item => item.category.toLowerCase() === category_name.toLowerCase())
            : data)
        : [];

    return (
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
            
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <div key={item.product_id} className="p-4 mb-6 text-center bg-white rounded-md shadow-md">
                        <img src={item.product_image} alt={item.product_title} className="object-cover w-full h-48 rounded-lg" />
                        <h3 className="text-lg font-bold">{item.product_title}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                       
                        <Link to={`/defaultCategories/${category_name}/product/${item.product_id}`}>

    <button className="text-purple-500 border-2 border-purple-500 rounded-full btn">View Details</button>
</Link>

                    </div>
                ))
            ) : (
                <p className="p-5 mt-3 text-5xl text-center text-purple-500 col-span-full">No products found for this category.</p>
            )}
        </div>
    );
};

export default DefaultCategories;
