import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; // Import Slick carousel styles
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS


const attractions = [
    {
        title: "Trekking",
        description: "Explore the beauty of nature with our guided trekking trails! Whether you’re an experienced hiker or a beginner, our scenic routes offer something for everyone. Enjoy breathtaking views, fresh air, and the chance to spot local wildlife. Lace up your boots and embark on an unforgettable adventure!",
        images: [
            "/vanutsav/b277f573-7572-4270-8056-a8dd04d57123.jpg",
            "/vanutsav/7A411C1B-F51B-49F5-94D2-9B20FD999B95.jpg",
        ],
    },
    {
        title: "Rain Dance",
        description: "Get ready to splash and dance in our exciting Rain Dance area! Feel the cool water as you groove to the beats of lively music under a refreshing artificial rain shower. It’s the perfect way to have fun and stay cool on a warm day. Come join the party and let your worries wash away!",
        images: [
            "/vanutsav/IMG_5705.PNG",
        ],
    },
    {
        title: "Kids Area",
        description: "Rain or shine, our Kids Play Area is packed with fun! With a variety of indoor games like table tennis, carrom, chess, and board games, it's the perfect spot for kids and families to bond and have a blast. Whether you're in for a friendly game or a competitive challenge, there's endless entertainment to be had. Come inside, escape the weather, and let the kids enjoy a fantastic gaming experience!",
        images: [
            "/vanutsav/378621640_292498940189615_4861714358265445121_n.jpg",
            "/vanutsav/08a45a72-0488-47fe-9e35-f909bc32dc03.jpg",
        ],
    },

    {
        title: "Tent Stay",
        description: "Immerse yourself in nature with our comfortable, spacious tent accommodations. Sleep under the stars and wake to the peaceful sounds of the outdoors. Whether for a romantic escape or a family adventure, our Tent Stay offers a memorable camping experience with all modern comforts.",
        images: [
            "/vanutsav/IMG_5707.PNG",
            "/vanutsav/IMG_5709.PNG"
        ],
    },

    {
        title: "Fun Camp",
        description: "Experience excitement and adventure at our Fun Camp! Suitable for all ages, our camp offers a range of activities including outdoor games, nature walks, and arts and crafts. Enjoy bonding with fellow campers, learning new skills, and making lasting memories. Whether it's a weekend getaway or an extended stay, our Fun Camp is your ultimate destination for fun, learning, and laughter!",
        images: [
            "/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg",
            "/vanutsav/fb706ed7-a5c2-4ccd-9d55-7aceb2685c20.jpg",

        ],
    },
    {
        title: "Corporate Events",
        description: "Host your corporate events in a stunning natural setting. Our resort offers fully equipped meeting rooms, high-speed internet, and tailored event planning services. Combine business with leisure for a productive, memorable experience with team-building activities and serene surroundings.",
        images: [
            "/vanutsav/IMG_5715.PNG",

        ],
    },
    {
        title: "Wedding Lawn",
        description: " Celebrate your special day in our enchanting Wedding Lawn, surrounded by lush greenery and scenic views. Whether for an intimate ceremony or grand celebration, we offer customizable decor, exceptional catering, and attentive service to make your wedding day truly magical.",
        images: [
            "/vanutsav/wedding1-1.jpg",
            "/vanutsav/wedding2-1.jpg",

        ],
    },
    {
        title: "Barbeque",
        description: "Delight in a flavorful outdoor feast with our Barbecue setup. Enjoy grilling your favorite meats and vegetables in a scenic setting, perfect for casual gatherings or special occasions. Savor the smoky aroma and fresh, delicious food with friends and family under the open sky.",
        images: [
            "/vanutsav/BARBEQUE-2.jpg",
            "/photos/451301431_803411235184188_8173455665035307874_n.jpeg",
        ],
    },
    {
        title: "Multicuisine Restaurant",
        description: "Savor a global culinary journey at our Multicuisine Restaurant. From spicy Indian curries to Italian pasta and Chinese stir-fries, our diverse menu caters to every taste. Enjoy a memorable dining experience in a cozy, elegant setting, perfect for any occasion.",
        images: [
            "/vanutsav/acf717e1-a8db-411f-97b8-c86b8934f768.jpg",
            "/vanutsav/IMG_5710.PNG",
            "/vanutsav/86bae00b-3aae-42b3-ae25-80494523a7ae.jpg",



        ],
    },
    {
        title: "Movie Night",
        description: "Enjoy cinema under the stars with our Movie Night! Gather your loved ones, cozy up with blankets, and savor freshly popped popcorn as you watch your favorite films on a big outdoor screen. Whether it's a classic or a new release, it's the perfect way to relax and create unforgettable memories.",
        images: [
            "/vanutsav/1-1-2.jpg",

        ],
    },
    // Add more attractions similarly
];
const OurPackage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="mt-6 py-20 relative bg-fixed bg-cover" style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                        Our Activites
                    </h1>
                </div>
            </section>

            {/* Introduction */}
            <div className="text-center py-8 ">
                <p className="text-3xl lg:text-4xl font-medium text-green-600 mb-2">Plan Your Trip To</p>
                <p className="text-3xl lg:text-4xl font-medium text-green-700">Van Utsav Agro Tourism</p>
            </div>

            {/* Attractions Section */}



            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    {attractions.map((attraction, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center shadow-lg rounded-md bg-white overflow-hidden`}
                        >
                            <div className="w-full md:w-1/2 flex justify-center">
                                {attraction.images.length > 1 ? (
                                    <Slider {...settings} className="w-full">
                                        {attraction.images.map((image, i) => (
                                            <div key={i} className="w-full h-72 rounded-md">
                                                <img
                                                    src={image}
                                                    alt={`Attraction ${index}-${i}`}
                                                    className="w-full h-full object-cover rounded-md"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    <div className="w-full h-72">
                                        <img
                                            src={attraction.images[0]}
                                            alt={`Attraction ${index}`}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 p-4 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-4 border-green-600 pb-2">
                                    {attraction.title}
                                </h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    {attraction.description}
                                </p>
                                <Link to={"/contact"}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-300"
                                    >
                                        Book now
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



        </>
    );
}

export default OurPackage;
