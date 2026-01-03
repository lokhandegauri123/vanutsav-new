import React, { useEffect, useState } from 'react'
import { BiDrink } from 'react-icons/bi';
import { BsCupHot } from 'react-icons/bs';
import { FaHotTub } from 'react-icons/fa';
import { MdFoodBank, MdOutlineDinnerDining, MdOutlineFastfood } from 'react-icons/md';
import { RiCupLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const Packages = () => {

    const packages = [
        {
            id: 1,
            title: 'One Day Picnic',
            price: 'Adult-799 | Kids-399',
            image: '/vanutsav/fb706ed7-a5c2-4ccd-9d55-7aceb2685c20.jpg',
            shedule: "Check-in : 9.30am | Check-out : 5pm"
        },
        {
            id: 2,
            title: 'Night Package with Tent Stay',
            price: 'Adult-1199 | Kids-799',
            image: '/vanutsav/2023-04-02.jpg',
            shedule: "Check-in : 4pm | Check-out : 11am (+Day)"
        },
        {
            id: 3,
            title: 'Whole Day Package with Tent Stay',
            price: 'Adult-1499 | Kids-899',
            image: '/vanutsav/1-1-2.jpg',
            shedule: "Check-in : 9.30pm | Check-out : 11am (+Day)"
        },
    ];


    const [expandedCard, setExpandedCard] = useState(null);

    const toggleShowMore = (index) => {
        if (expandedCard === index) {
            setExpandedCard(null);
        } else {
            setExpandedCard(index);
        }
    };

    const getItems = (pkg) => {
        switch (pkg.id) {
            case 1: // Day Package
                return (
                    <>
                        <div className="flex items-center gap-3 mt-2">
                            <BiDrink className="text-2xl text-green-500" />
                            <p className="text-base font-medium text-gray-800">Welcome Drink</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <MdOutlineFastfood className="text-2xl text-green-500" />
                            <p className="text-base font-medium text-gray-800">Breakfast</p>
                        </div>
                        {expandedCard === 0 && (
                            <>
                                <div className="flex items-center gap-3 mt-2">
                                    <MdFoodBank className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">Unlimited Lunch</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <BsCupHot className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">High Tea & Snacks</p>
                                </div>
                            </>
                        )}
                    </>
                );
            case 2: // Night Package
                return (
                    <>
                        <div className="flex items-center gap-3 mt-2">
                            <BiDrink className="text-2xl text-green-500" />
                            <p className="text-base font-medium text-gray-800">Welcome Drink</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <BsCupHot className="text-2xl text-green-500" />
                            <p className="text-base font-medium text-gray-800">High Tea & Snacks</p>
                        </div>
                        {expandedCard === 1 && (
                            <>
                                <div className="flex items-center gap-3 mt-2">
                                    <FaHotTub className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">Barbecue</p>
                                </div>

                                <div className="flex items-center gap-3 mt-2">
                                    <MdOutlineDinnerDining className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">Unlimited Dinner (Veg & non-veg)</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <RiCupLine className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">
                                        Next Day Morning-Breakfast
                                    </p>
                                </div>
                            </>
                        )}
                    </>
                );
            case 3: // OverNight Package
                return (
                    <>
                        <div className="flex items-center gap-3 mt-2">
                            <BiDrink className="text-2xl text-green-500" />
                            <p className="text-base font-medium text-gray-800">Welcome Drink</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <MdOutlineFastfood className="text-2xl text-green-500" />
                            <p className="text-base font-medium text-gray-800">Breakfast</p>
                        </div>
                        {expandedCard === 2 && (
                            <>
                                <div className="flex items-center gap-3 mt-2">
                                    <MdFoodBank className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">Unlimited Lunch</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <BsCupHot className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">High Tea & Snacks</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <FaHotTub className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">Barbecue</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <MdOutlineDinnerDining className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">Unlimited Dinner (Veg & non-veg)</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <RiCupLine className="text-2xl text-green-500" />
                                    <p className="text-base font-medium text-gray-800">
                                        Next Day Morning-Breakfast
                                    </p>
                                </div>
                            </>
                        )}
                    </>
                );
            default:
                return null;
        }
    };
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="text-gray-700 body-font py-10">
            <div data-aos="fade-up" className="container mx-auto">
                <div className="flex flex-col">
                    <div className="text-center mb-6">
                        <h1 className="text-black font-medium title-font text-4xl md:mb-2 sm:mb-0">
                            Van Utsav Agro Tourism Packages
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                    {packages.map((pkg, index) => (
                        <div key={pkg.id} className="p-2 w-full">
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative border border-green-500"
                                data-aos="fade-up"
                            >
                                <div className="relative">
                                    <img
                                        alt="content"
                                        className="object-cover object-center w-full h-48 transition-transform transform duration-300 ease-in-out hover:scale-110"
                                        src={pkg.image}
                                    />
                                    <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-br-lg shadow-lg">
                                        Best Package
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-center mb-2">
                                        <h2 className="text-xl font-bold text-gray-900">{pkg.title}</h2>
                                    </div>
                                    <div className='text-center mb-2 '>

                                        <p>{pkg.shedule}</p>
                                    </div>
                                    <div className="bg-green-400 w-56 mx-auto p-2 rounded-md font-bold text-white text-center mb-4">
                                        <p>{pkg.price}</p>
                                    </div>

                                    {/* Display items based on package */}
                                    {getItems(pkg)}

                                    <button
                                        className="text-green-600 mt-4 block text-center font-semibold hover:underline"
                                        onClick={() => toggleShowMore(index)}
                                    >
                                        {expandedCard === index ? 'Show Less' : 'Learn More'}
                                    </button>

                                    <div className="flex justify-center mt-6">
                                        <Link to={"/contact"}>
                                            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md">
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Packages
