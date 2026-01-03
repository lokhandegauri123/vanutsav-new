import React, { useEffect } from 'react'
import { BsMusicPlayer } from 'react-icons/bs';
import { FaCalendarCheck, FaCampground, FaChild, FaCloudSunRain, FaFutbol, FaGamepad, FaGlassCheers, FaHiking, FaMusic, FaPhoneAlt } from 'react-icons/fa'
import { MdFamilyRestroom } from 'react-icons/md';
import { RiGroup3Fill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const Activity = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <>
        <div data-aos="fade-up" className='bg-green-100'>
            <div className="container mx-auto px-5 py-10">
                <h2 className="text-4xl font-medium text-center mb-9">Van Utsav Activity</h2>
                {/* Primary color from logo */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Trekking */}

                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaHiking className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Trekking</h3>
                    </div>

                    {/* Kids Play Area*/}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaChild className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Kids Play Area</h3>
                    </div>

                    {/* Tent Stay */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaCampground className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Tent Stay</h3>
                    </div>

                    {/*Hurda Party */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaGlassCheers className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Hurda Party</h3>
                    </div>

                    {/* Rain Dance with Music */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaCloudSunRain className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Rain Dance With Music</h3>
                    </div>

                    {/* Games & Fun Activities */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaGamepad className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Games & Fun Activities</h3>
                    </div>

                    {/* Bonfire with music */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaMusic className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Bonfire with music</h3>
                    </div>

                    {/* Dj and Dance*/}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <BsMusicPlayer className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white"> Dj and Dance</h3>
                    </div>


                    {/* Couple Campsite */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <RiGroup3Fill className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Couple Campsite</h3>
                    </div>

                    {/* Families Campsite */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <MdFamilyRestroom className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Families Campsite</h3>
                    </div>

                    {/* 24/7 Support */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaPhoneAlt className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">24/7 Support</h3>
                    </div>

                    {/* Instant Booking */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#0B9D76] group">
                        <FaCalendarCheck className="text-[#0B9D76] text-6xl mb-4 transition-colors duration-300 group-hover:text-white" />
                        <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">Instant Booking</h3>
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default Activity