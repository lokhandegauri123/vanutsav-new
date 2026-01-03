import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS
const testimonials = [
    {
        id: 1,
        name: 'Gouri Sonde',
        title: 'Visiter',
        quote: 'Best experience ever...you enjoys all amenities over there as everything is so well planned. Its really awesome.',
        image: 'https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'Ravindra Nisal',
        title: 'Visiter',
        quote: 'Pioneer of adventure tourism, hope will improve as responce goes on. wonderful location, good spot family and friend Circle get-together.',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        name: 'THE 4D GUYS',
        title: 'Visiter',
        quote: ' What is the price for kids and adults And if they are more than ten will we get discount ',
        image: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        name: 'Sarthak Bhoskar',
        title: 'Visiter',
        quote: ' Nice step for Holi and other Indians festival we enjoy a lot ',
        image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        id: 5,
        name: 'Kshitija Nirmal',
        title: 'Visiter',
        quote: 'Nice place a good escape from your boring everyday life .',
        image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 6,
        name: 'Rushikesh vetal',
        title: 'Visiter',
        quote: 'Very nice facility for all evants ',
        image: 'https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 7,
        name: 'Umesh Wanjare',
        title: 'Visiter',
        quote: 'Rain dance experience and other activities nice',
        image: 'https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 8,
        name: 'Ayyan Pathan',
        title: 'Visiter',
        quote: 'Best place for family and friends',
        image: 'https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 9,
        name: 'Shivani Kalwane',
        title: 'Visiter',
        quote: 'Beautiful place must visit ',
        image: 'https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonialsPerPage = 3;
    const totalTestimonials = testimonials.length;

    // Automatically move to the next testimonial every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextPage();
        }, 4000); // Adjust this interval to control the speed

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    };

    const prevPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
    };

    // Calculate the indices of the three visible testimonials
    const visibleTestimonials = [
        testimonials[currentIndex % totalTestimonials],
        testimonials[(currentIndex + 1) % totalTestimonials],
        testimonials[(currentIndex + 2) % totalTestimonials],
    ];
    useEffect
        (() => {
            AOS.init({ duration: 1000 });
        }, []);

    return <>

        <section className="py-8  bg-green-100 ">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl font-medium text-gray-900 mb-8 text-center">What Our Guests Say</h2>
                <div className="relative">
                    <div className="flex flex-wrap -m-4">
                        {visibleTestimonials.slice(0, 2).map((testimonial) => (
                            <div key={testimonial.id} className="p-4 w-full md:w-1/2">
                                <div className="h-full bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col border border-green-500">
                                    <p>
                                        <FaQuoteRight />
                                    </p>

                                    <p className="text-gray-700 mb-4 flex-grow">{testimonial.quote}</p>
                                    <div className="flex items-center mt-auto">
                                        {/* <img
                                            alt={testimonial.name}
                                            src={testimonial.image}
                                            className="w-12 h-12 rounded-full object-cover"
                                        /> */}
                                        <div className="ml-4">
                                            <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                                            <p className="text-gray-500 text-sm">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={prevPage}
                            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition duration-300 mx-5"
                        >
                            <FaArrowLeft size={24} />
                        </button>
                        <button
                            onClick={nextPage}
                            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition duration-300 mx-5"
                        >
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>






    </>
}

export default Testimonials