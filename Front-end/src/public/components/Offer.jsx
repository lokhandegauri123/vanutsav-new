import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
    return <>
        <section className="text-white mx-4 py-2 ">
            <div className="flex flex-col sm:flex-row w-full h-full p-1">

                {/* Exclusive Offer Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-black py-6 sm:py-5 shadow-lg">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 animate-bounce">Exclusive Offer*</h2>
                        <p className="text-lg md:text-xl mb-6">
                            Enjoy 15% off on pre-booking!
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        >
                            Book Now & Save 15%
                        </Link>
                    </div>
                </div>

                {/* Coming Soon Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0B9D7C] py-6 sm:py-5 shadow-lg">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 animate-bounce">
                            Available*
                        </h2>
                        <div className="flex flex-col items-center space-y-1 mb-4">
                            <p className="text-2xl md:text-3xl font-bold text-white">
                                Swimming Pool &   Cottages
                            </p>
                            {/* <span className="text-xl md:text-2xl text-gray-200">&</span> */}
                            {/* <p className="text-2xl md:text-3xl font-bold text-white">
                                Cottages
                            </p> */}
                        </div>
                        <p className="text-lg md:text-xl text-gray-100">
                            Stay tuned for more updates on our new amenities!
                        </p>
                    </div>
                </div>

            </div>
        </section>

    </>
}

export default Offer