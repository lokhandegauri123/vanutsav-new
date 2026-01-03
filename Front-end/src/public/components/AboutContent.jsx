import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const AboutContent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <>
        <section data-aos="fade-up" className="text-gray-600 body-font py-6  ">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 px-5">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full  flex items-center">
                    <img className="object-cover object-center rounded-lg w-full " alt="Van Utsav Agro Tourism" height="10px" src="/vanutsav/441289965_812178043710157_1254695730044977998_n.jpeg" />
                </div>

                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center h-full">
                    <p className="text-green-500 font-semibold text-lg">About Us</p>
                    <h1 className="text-3xl sm:text-4xl font-medium text-black mb-4">Van Utsav Agro Tourism</h1>
                    <p className="mb-6 leading-relaxed text-start ">Welcome to Van Utsav Agro Tourism, the perfect place for a unique and enjoyable agro-tourism experience. Located in the peaceful surroundings of Murshadkuli, Chhatrapati Sambhajinagar, we provide a wonderful mix of nature, adventure, and culture.</p>
                    <p className="mb-8 leading-relaxed hidden sm:hidden md:hidden lg:block text-start ">Our goal is to help you create unforgettable memories with your family and friends. Whether you're looking to relax, have fun, or explore, Van Utsav Agro Tourism has something special for everyone. enjoy farm-to-table dining, scenic nature trails, cultural performances, adventure sports, and cozy accommodations at Van Utsav Agro Tourism.</p>
                    <div className="flex justify-center md:justify-start">
                        <Link to={"/about"}>
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-lg text-lg">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>





    </>
}

export default AboutContent