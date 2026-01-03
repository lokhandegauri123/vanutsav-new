import React, { useEffect } from 'react'
import { FaChild } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS



const SchoolPackage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <>
        <section className="mt-6 py-20 relative bg-fixed bg-cover" style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                    School Package
                </h1>
            </div>
        </section>



        <section className="text-gray-700 body-font py-12 ">
            {/* About Us Section */}
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-6">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-3xl font-medium  text-green-500 mb-6">Experience a Fun-filled Day at Van Utsav Agro Tourism</h1>
                        <p className="text-lg leading-relaxed text-gray-800 mb-5">
                            Welcome to Van Utsav Agro Tourism, where learning meets adventure! Our specially curated school packages offer students an unforgettable day filled with music, fun activities, and delicious meals.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800 hidden lg:block">
                            From trekking through nature to enjoying traditional Hurda parties and rain dances, every moment is designed to inspire joy and discovery. Join us for a unique educational experience that combines outdoor excitement with cultural enrichment, all in a safe and vibrant environment. Let’s create memories that will last a lifetime!
                        </p>
                        <Link to={"/contact"} >
                            <button className="md:mt-5 mt-2 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Book Now
                            </button>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/vanutsav/d1fffb79-f9a2-4e0b-85fe-3098e83ea5fd.jpg"
                            alt="School Trip"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div >

            {/* Menu Section */}
            <div className='bg-green-100'>
                <div className="container mx-auto px-6 py-10 mb-16" >
                    <h2 className="text-3xl font-bold text-green-500 text-center mb-8">Delicious Day Out: Our Tasty School Menu</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Breakfast Box */}
                        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-green-500">
                            <h3 className="text-2xl font-semibold text-green-500 mb-4">Breakfast</h3>
                            <ul className="list-disc ml-5 space-y-2 text-gray-800">
                                <li>Pohe / Upma</li>
                                <li>Sheera / Idli (2 pcs) + Chutney</li>
                                <li>Boiled Sweetcorn (any one)</li>
                                <li>Idli (2 pcs) with Chutney</li>
                            </ul>
                        </div>

                        {/* Lunch Box */}
                        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-green-500">
                            <h3 className="text-2xl font-semibold text-green-500 mb-4">Lunch</h3>
                            <ul className="list-disc ml-5 space-y-2 text-gray-800">
                                <li><span className="font-bold text-green-500">Maharashtrian:</span> Poli + Bhaji + Varan + Bhat + Jalebi (Gulab Jamun)</li>
                                <li><span className="font-bold text-green-500">Punjabi:</span> Puri + Bhaji + Pulao + Jalebi (Gulab Jamun)</li>
                                <li><span className="font-bold text-green-500">Chinese:</span> Veg Manchurian + Fried Rice + Hakka Noodles + Jalebi (Gulab Jamun)</li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div>

            {/* Pricing Section */}
            <div data-aos="fade-up" className="container mx-auto px-6 mb-16 " >
                <h2 className="text-3xl font-bold text-green-500 text-center mb-8">Pricing Per Child</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Pricing Boxes */}
                    {[
                        { group: 'Pre Primary to Sr. Kg', price: '₹199 per head' },
                        { group: '1st to 4th Standard', price: '₹275 per head' },
                        { group: '5th to 7th Standard', price: '₹325 per head' },
                        { group: '8th to 10th Standard', price: '₹375 per head' }
                    ].map((item, index) => (
                        <div key={index} className="p-8 bg-white rounded-lg shadow-lg text-center border-t-4 border-green-500">
                            <FaChild className="text-green-500 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.group}</h3>
                            <p className="text-green-600 font-bold text-xl">{item.price}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-800 mt-8">
                    <span className="font-semibold">Note:</span> One teacher is complimentary for every 30 students.
                </p>
            </div >
        </section >



    </>
}

export default SchoolPackage