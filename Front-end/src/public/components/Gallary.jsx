import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const Gallary = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <>
        <section data-aos="zoom-in-up" className="body-font ">
            <div className="container px-5 py-10 mx-auto">
                {/* <!-- Gallery Title --> */}
                <div className="flex justify-center w-full mb-8">
                    <h1 className="text-3xl lg:text-4xl font-medium title-font text-black text-center">
                        Van Utsav Agro Tourism Our Gallery
                    </h1>
                </div>

                {/* <!-- Gallery Images --> */}
                <div className="flex flex-wrap md:-mx-2">
                    {/* <!-- Left Column --> */}
                    <div className="w-full md:w-1/2 flex flex-wrap">
                        <div className="md:p-2 p-1 w-1/2 overflow-hidden hidden sm:block ">
                            <img alt="gallery" className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" src="/vanutsav/IMG_5715.PNG" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2 overflow-hidden hidden sm:block">
                            <img alt="gallery" className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" src="/vanutsav/323942490_5773781922707191_1313707774469881417_n-768x960.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-full overflow-hidden">
                            <img alt="gallery" className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" src="/vanutsav/378621640_292498940189615_4861714358265445121_n.jpg" />
                        </div>
                    </div>

                    {/* <!-- Right Column --> */}
                    <div className="w-full md:w-1/2 flex flex-wrap">
                        <div className="md:p-2 p-1 w-full overflow-hidden">
                            <img alt="gallery" className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" src="/vanutsav/c059f1ca-5be7-4288-8522-2ca38a93434b.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2 overflow-hidden hidden sm:block">
                            <img alt="gallery" className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" src="/vanutsav/acf717e1-a8db-411f-97b8-c86b8934f768.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2 overflow-hidden hidden sm:block">
                            <img alt="gallery" className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" src="/vanutsav/IMG_5712.PNG" />
                        </div>
                    </div>

                </div>
                <div className='text-center mt-6'>

                    <Link to={"/gallary"}>
                        <button className="inline-flex  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">

                            View All
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    </>

}

export default Gallary