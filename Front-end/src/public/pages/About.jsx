import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const cards = [
        { id: 1, img: '/vanutsav/441301431_803411235184188_8173455665035307874_n.jpeg', text: 'Jungle Cooking' },
        { id: 2, img: '/vanutsav/7A411C1B-F51B-49F5-94D2-9B20FD999B95.jpg', text: 'Trekking' },
        { id: 3, img: '/vanutsav/IMG_8347.JPG', text: 'Bonfire Night' },
        { id: 4, img: '/vanutsav/IMG_5709.PNG', text: 'Camping' },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);
    return <>
        {/* bg-gradient-to-r from-green-100 via-green-200 to-green-300 opacity-30 */}
        <section className="mt-6 py-20 relative bg-fixed bg-cover" style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                    About Vanutsav Resort
                </h1>
            </div>
        </section>



        <section className="text-gray-600 body-font mx-5">
            <div className="container mx-auto flex px-5 my-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-start sm:text-4xl text-3xl mb-4 font-medium text-green-500">
                        Van Utsav Agro Tourism Resort
                    </h1>
                    <p className="mb-8 leading-relaxed text-start">
                        Welcome to Van Utsav Agro Tourism, the perfect place for a unique and immersive experience in nature. Located in the peaceful landscapes of Murshadkuli, Chhatrapati Sambhajinagar, our destination offers a wonderful mix of nature, adventure, and culture.
                    </p>
                    <p className="mb-8 leading-relaxed text-start">
                        Whether you’re looking to relax, have fun, or explore, we provide everything you need to create unforgettable memories with your family and friends.Discover the beauty of rural life, indulge in local cuisine, enjoy thrilling activities, and reconnect with nature at Van Utsav Agro Tourism Resort.
                    </p>
                    <div className="">
                        <Link to={"/contact"}>
                            <button className=" inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center  h-[50vh] md:h-[60vh] lg:h-[80vh] w-full" alt="abouthero" src="/vanutsav/IMG_5710.PNG" />
                </div>
            </div>
        </section>


        <div data-aos="fade-up" className="relative bg-cover bg-center bg-no-repeat  " style={{ backgroundImage: `url('https://vanutsavagrotourism.com/wp-content/uploads/2024/07/b277f573-7572-4270-8056-a8dd04d57123.jpg')` }}>
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text and button overlay */}
            <div className="relative z-10 text-center text-white py-11">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Book Now & Experience The <br /> Ultimate Vacation In Paradise!
                </h1>
                <Link to={"/contact"}>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md text-lg hover:bg-green-600 transition-all">
                        Reserve Now
                    </button>
                </Link>
            </div>

            {/* Carousel */}
            <div className="relative z-10 container mx-auto py-8 px-5 ">
                <Slider {...settings}>
                    {cards.map((card) => (
                        <div key={card.id} className="p-2">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={card.img} alt={card.text} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-center text-lg font-semibold">{card.text}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </>
}


const PreviousBtn = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 bg-white rounded-full p-2 shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <FaArrowLeft size={20} />
        </div>
    );
};

// Custom Next Button
const NextBtn = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 bg-white rounded-full p-2 shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <FaArrowRight size={20} />
        </div>
    );
};


export default About