import React, { useEffect, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Carousle.css'

const Carousle = () => {
    const slideRef = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);

    useEffect(() => {
        const slide = slideRef.current;
        const next = nextButtonRef.current;
        const prev = prevButtonRef.current;

        const handleNextClick = () => {
            const items = slide.querySelectorAll('.item');
            slide.appendChild(items[0]);
        };

        const handlePrevClick = () => {
            const items = slide.querySelectorAll('.item');
            slide.prepend(items[items.length - 1]);
        };

        if (next && prev) {
            next.addEventListener('click', handleNextClick);
            prev.addEventListener('click', handlePrevClick);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (next) next.removeEventListener('click', handleNextClick);
            if (prev) prev.removeEventListener('click', handlePrevClick);
        };
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <>
        <div data-aos="fade-left" className='pb-2'>
            <h1 className='text-4xl font-medium text-center'>Van Utsav Agro Tourism</h1>


            <div className="fristcarousel">
                <div ref={slideRef} className="slide">
                    <div className="item" style={{ backgroundImage: 'url(https://vanutsavagrotourism.com/wp-content/uploads/2024/07/324385444_3089708314654996_9055360855361705759_n.jpg)' }}>
                        <div className="content">
                            <div className="name ">Maharashtra</div>
                            <div className="des">Explore the vibrant culture and beautiful landscapes of Maharashtra.</div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="item hidden" style={{ backgroundImage: 'url(https://vanutsavagrotourism.com/wp-content/uploads/2024/07/b277f573-7572-4270-8056-a8dd04d57123.jpg)' }}>
                        <div className="content">
                            <div className="name">Van Utsav</div>
                            <div className="des">Explore the beauty of nature with our guided trekking tours.</div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="item hidden" style={{ backgroundImage: 'url(https://vanutsavagrotourism.com/wp-content/uploads/2024/07/410511200_17905657532875850_8770221531631735403_n.jpg)' }}>
                        <div className="content">
                            <div className="name">Sunset & Green Trees</div>
                            <div className="des">Witness the breathtaking sunset amidst lush green trees.</div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div className="item hidden" style={{ backgroundImage: 'url(https://vanutsavagrotourism.com/wp-content/uploads/2024/07/IMG_5710.jpg)' }}>
                        <div className="content">
                            <div className="name ">Family & Hurda Party</div>
                            <div className="des">Enjoy a fun-filled family day with a traditional hurda party.</div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="item hidden" style={{ backgroundImage: 'url(https://vanutsavagrotourism.com/wp-content/uploads/2024/07/dd540eda-3bbd-472c-af23-424fe7251ebd.jpg)' }}>
                        <div className="content">
                            <div className="name">Kids Play Area</div>
                            <div className="des">A fun-filled space for children to play and explore.</div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="item object-cover" style={{ backgroundImage: 'url(https://vanutsavagrotourism.com/wp-content/uploads/2024/07/441301431_803411235184188_8173455665035307874_n.jpeg)' }}>
                        <div className="content">
                            <div className="name">Jungle Cooking</div>
                            <div className="des">Savor unique flavors with a jungle cooking adventure.</div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="button text-white text-center">
                    <button ref={prevButtonRef} className="prev ">
                        <div className='text-center' >

                            <FaArrowLeft className='text-2xl ml-2' />
                        </div>

                    </button>
                    <button ref={nextButtonRef} className="next">
                        <FaArrowRight className='text-2xl ml-2' />

                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Carousle