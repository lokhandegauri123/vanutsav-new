import React, { useEffect, useState } from 'react'
import { CgWebsite } from 'react-icons/cg';
import { FaAward, FaBuilding, FaGoogle, FaProjectDiagram, FaRocketchat, FaUsers } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoIosChatboxes, IoMdHome } from 'react-icons/io';
import { IoChatboxEllipsesOutline, IoHomeOutline } from 'react-icons/io5';

const Counter = () => {
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [team, setTeam] = useState(0);
    const [offices, setOffices] = useState(0);
    useEffect(() => {
        // Increment for "Glorious Years"
        const incrementYears = () => {
            let start = 0;
            const end = 26;
            const duration = 2000;
            const incrementTime = duration / end;

            const increment = () => {
                start += 1;
                setYears(start);
                if (start < end) {
                    setTimeout(increment, incrementTime);
                }
            };

            increment();
        };

        // Increment for "Successful Projects"
        const incrementProjects = () => {
            let start = 0;
            const end = 1500;
            const duration = 2000;
            const incrementTime = duration / end;

            const increment = () => {
                start += 1;
                setProjects(start);
                if (start < end) {
                    setTimeout(increment, incrementTime);
                }
            };

            increment();
        };

        // Increment for "Strong Team"
        const incrementTeam = () => {
            let start = 0;
            const end = 7;
            const duration = 2000;
            const incrementTime = duration / end;

            const increment = () => {
                start += 1;
                setTeam(start);
                if (start < end) {
                    setTimeout(increment, incrementTime);
                }
            };


            increment();
        };

        // Increment for "Offices Nationwide"
        const incrementOffices = () => {
            let start = 0;
            const end = 15;
            const duration = 2000;
            const incrementTime = duration / end;

            const increment = () => {
                start += 1;
                setOffices(start);
                if (start < end) {
                    setTimeout(increment, incrementTime);
                }
            };

            increment();
        };

        incrementYears();
        incrementProjects();
        incrementTeam();
        incrementOffices();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <>
        <div data-aos="fade-up" className="py-6 bg-green-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">
                    {/* Card 1 */}
                    <div className="bg-[#0B9D76] text text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
                        <div>
                            <div className="text-3xl font-bold">{years}+</div>
                            <div className="text-sm">Google reviews</div>
                        </div>
                        <FaGoogle className="text-7xl bg-green-200 text-black p-2 rounded-full" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
                        <div>
                            <div className="text-3xl font-bold">{projects}+</div>
                            <div className="text-sm">Website reviews</div>
                        </div>
                        <IoIosChatboxes className="text-7xl bg-green-200 text-black p-2 rounded-full" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0B9D76] text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
                        <div>
                            <div className="text-3xl font-bold">{team}+</div>
                            <div className="text-sm">Year Experience</div>
                        </div>
                        <FaClockRotateLeft className="text-7xl bg-green-200 text-black p-2 rounded-full" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
                        <div>
                            <div className="text-3xl font-bold">{offices}+</div>
                            <div className="text-sm">Properties</div>
                        </div>
                        <div >

                            <IoMdHome className="text-7xl bg-green-200 text-black p-2 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>











    </>
}

export default Counter