import { useLoaderData, useParams } from "react-router-dom";

const DefaultCategories = () => {
    const data = useLoaderData();
    const { category_name = "" } = useParams();

    // If category_name is empty, display all products; otherwise, filter by category
    const filteredData = Array.isArray(data)
        ? (category_name
            ? data.filter(item => item.category.toLowerCase() === category_name.toLowerCase())
            : data)
        : [];

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <div key={item.product_id} className="p-4 bg-white rounded-md shadow-md">
                        <img src={item.product_image} alt={item.product_title} className="object-cover w-full h-48" />
                        <h3 className="text-lg font-bold">{item.product_title}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        <button className="text-purple-500 border-2 border-purple-500 rounded-full btn">View Details</button>
                    </div>
                ))
            ) : (
                <p className="p-5 mt-3 text-5xl text-center text-purple-500 col-span-full">No products found for this category.</p>
            )}
        </div>
    );
};

export default DefaultCategories;
