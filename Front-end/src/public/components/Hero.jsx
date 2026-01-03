import React from "react";
import AboutContent from "./AboutContent";
import Gallary from "./Gallary";
import Activity from "./Activity";
import Packages from "./Packages";
import Fquestions from "./Fquestions";
import Testimonials from "./Testimonials";
import Shedule from "./Shedule";
import NearbyLocations from "./NearbyLocations";
import { Link } from "react-router-dom";
import Offer from "./Offer";

const Hero = () => {
  return (
    <>
      {/* <div
            className="
    mt-24
    h-[21vh]
    sm:h-[50vh]
    md:h-[70vh]
    lg:h-[92vh]
    lg:w-5/3
    w-full
            mx-auto
    relative"
            style={{
                backgroundImage: `url('/photos/Greenvanutsav.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}
        >
            <Link to={"/contact"}>
                <button
                    className="
      absolute
      bottom-16
      left-16
      transform 
       px-10
      py-2 
      font-bold 
      bg-white 
      text-green-500 
      rounded-lg
      transition 
      duration-300 
      ease-in-out 
      text-xs 
      sm:text-sm 
      md:text-base 
      lg:text-xl
      hidden
    sm:hidden
    md:block
      "
                >

                    Inquire Now
                </button>
            </Link>
        </div> */}

      <div
        className="
    mt-6
    h-48      /* Mobile height */
    sm:h-80   /* Small screens */
    md:h-96   /* Medium screens */
    lg:h-[30rem]  /* Large screens */
    xl:h-[34rem]  /* Extra-large screens */
    w-full
    mx-auto
    text-[10px]
    oklch(97% 0.001 106.424)

    relative"
        style={{
          backgroundImage: `url('/photos/VanutsavHero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to={"/contact"}>
          <button
            className="
      absolute
      bottom-16
      left-16
      transform 
       px-10
      py-2 
      font-bold 
      bg-white 
      text-green-500 
      rounded-lg
      transition 
      duration-300 
      ease-in-out 
      text-xs 
      sm:text-sm 
      md:text-base 
      lg:text-xl
      hidden
    sm:hidden
    md:block
      "
          >
            Enquire Now
          </button>
        </Link>
      </div>

      <Offer />
      <AboutContent />
      {/* <Carousle /> */}
      <Shedule />
      {/* <Counter /> */}
      <Gallary />
      <Activity />
      <Packages />
      <NearbyLocations />
      <Fquestions />
      <Testimonials />
    </>
  );
};

export default Hero;
