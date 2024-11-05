
const Support = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center md:flex-row">
                    {/* Left Column with Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://i.ibb.co.com/GnqHxWx/download-12.jpg" 
                            alt="Support Team"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                  
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-bold text-gray-800">Need Help? We are Here for You!</h2>
                        <p className="mt-4 text-gray-600">
                            Our support team is ready to assist you with any questions or issues you may have. 
                            Please fill out the form below, and we will get back to you as soon as possible.
                        </p>

                      
                        <form className="p-6 mt-6 bg-white rounded-lg shadow-md">
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full input input-bordered"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full input input-bordered"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full textarea textarea-bordered"
                                ></textarea>
                            </div>
                            <button className="w-full bg-purple-500 btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
