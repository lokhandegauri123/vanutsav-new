import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const nearbyLocations = [
    {
        title: "Biwi Ka Maqbara",
        description: "A stunning monument resembling the Taj Mahal, built in the memory of Aurangzeb's wife.",
        image: "/vanutsav/1676520151.154741-Bibi_Ka_Maqbara_Img.jpeg", // Replace with actual image URL
    },
    {
        title: "Ellora Caves",
        description: "An ancient rock-cut cave complex featuring Hindu, Buddhist, and Jain temples.",
        image: "/vanutsav/verulcaves.jpg", // Replace with actual image URL
    },
    {
        title: "Daulatabad Fort",
        description: "A majestic fortress with a rich history, perched atop a hill.",
        image: "/vanutsav/1280px-Daulatabad_Fort_a_view.jpeg", // Replace with actual image URL
    },
];

const NearbyLocations = () => {
    return (
        <section className="py-12 bg-green-100">
            <div className="max-w-7xl mx-auto px-5 md:px-16 lg:px-5">
                <h2 className="text-4xl font-medium text-center mb-10 text-gray-800">Nearby Locations</h2>
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nearbyLocations.map((location, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                        >
                            <img
                                src={location.image}
                                alt={location.title}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{location.title}</h3>
                                <p className="text-gray-600 mb-4">{location.description}</p>
                                {/* <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition-all"
                                >
                                    Learn More
                                </motion.button> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearbyLocations;
