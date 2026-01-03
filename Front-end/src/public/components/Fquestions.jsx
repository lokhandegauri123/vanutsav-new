import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation, } from 'framer-motion';
import { FaMinus, FaPlus } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const Fquestions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: 'Do you cater for parties?',
            answer: `Yes, we do offer special packages for corporate events and for children’s birthday parties. A minimum of 25 people are required and the admission ticket includes lunch and 25 activities.`,
        },
        {
            question: 'How do I reach Van Utsav Agro Tourism Resort ?',
            answer: ` Van Utsav Agro Tourism Resort is located 10 km away from Ch. Sambhajinagar (Aurangabad). You can either drive your own vehicle or hire a private vehicle to reach the resort. For precise directions, follow this Google Maps link.`,
        },
        {
            question: 'How are the tent arrangements ?',
            answer: `You will get a separate 2 people, 3 people or 4 people Non-AC tents according to your choice and availability. You don’t have to share a tent with an unknown person. Foam mattresses, bed-sheet, pillow, and blanket will be provided in the tent. (We don’t provide sleeping bags for hygiene purpose).`,
        },
        {
            question: 'How to book Van Utsav Agro Tourism ?',
            answer: `Booking at Van Utsav Agro Tourism has become easier with the one-step  booking process.
            Contact Us
            7620723370
            9371572052
            9423375949
          `,
        },
        {
            question: 'What is the cancellation policy ?',
            answer: `Cancellation policy is as follows:

A) 33% reservation-advance is no-refundable in case of total cancellation. However, booking can be rescheduled up to the next year if cancellation is made 24 hours before check-in time.

B) 33% reservation-advance is adjustable (In the final payment) in case of partial cancellation if partial cancellation is made 24 hours before check-in time, Else guest has to pay the full amount.`,
        },
        {
            question: 'What are the food options ? ',
            answer: `Snacks: Tea and pakoda
    
    Veg-BBQ: Marinated paneer with assorted veggies
    NonVeg-BBQ: Marinated chicken with assorted veggies
    
    Veg-dinner: Veg or paneer sabzi, chapati, dal-tadka, steamed rice, salad, sweet.
    
    Nonveg-dinner: Chicken sukha, curry, chapati, steamed rice, salad, sweet.
    
    Breakfast: Tea, Poha, Bread, Jam.`,
        },
    ];

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return <>

        <div data-aos="zoom-in-up" className="px-5 py-10 ">
            <div className=' text-center text-4xl font-medium text-black mb-2'>
                <h1>FAQ'S</h1>
            </div>
            <div className="flex flex-col  md:flex-row gap-8 sm:mx-5 lg:mx-0 ">

                {/* Right Side - Questions */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-center" >Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {questions.slice(0, 3).map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-4 bg-white rounded-lg cursor-pointer transition-all duration-300  border border-green-500"
                                onClick={() => handleClick(index)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold">{item.question}</span>
                                    <span className="text-xl">
                                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </div>
                                <motion.div
                                    className={`mt-2 overflow-hidden ${activeIndex === index ? 'py-2' : 'py-0'}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <p className=" bg-emerald-500 text-white rounded-md p-4 whitespace-pre-line">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Left Side - Additional Questions */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-center">Additional Questions</h3>
                    <div className="space-y-4">
                        {questions.slice(3).map((item, index) => (
                            <motion.div
                                key={index + 3}
                                className="p-4 bg-white rounded-lg cursor-pointer transition-all duration-300 border border-green-500"
                                onClick={() => handleClick(index + 3)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold">{item.question}</span>
                                    <span className="text-xl">
                                        {activeIndex === index + 3 ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </div>
                                <motion.div
                                    className={`mt-2 overflow-hidden ${activeIndex === index + 3 ? 'py-2' : 'py-0'}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: activeIndex === index + 3 ? 'auto' : 0, opacity: activeIndex === index + 3 ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <p className=" bg-emerald-500 text-white rounded-md p-4 whitespace-pre-line">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Fquestions