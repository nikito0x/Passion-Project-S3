import React from "react";
import CSS from "../index.css";

import { Link } from "react-router-dom";
import servicePic from "../pictures/service-pic.jpg";
import dentistImg from "../pictures/doctor.jpg";
import XrayImg from "../pictures/xray.jpg";


const About = () => {
    return (
        <>
            <div className="bg-[#4452AC] text-white ">
                {/* Header Section */}
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link to="/">
                <h1 className="logo text-3xl font-bold text-gray-800">FAIRY CARE</h1>
                        </Link>

                        {/* Navigation Links */}
                        <nav className="space-x-6">
                            <Link to="/about">

                                <a className="text-gray-700 hover:text-[#FFAC75]">
                                    ABOUT
                                </a>
                            </Link>

                            <Link to="/about">
                                <a href="" className="text-gray-700 hover:text-[#FFAC75]">
                                    SERVICES
                                </a>
                            </Link>

                            <Link to="/gallery">
                                <a className="text-gray-700 hover:text-[#FFAC75]">
                                    GALLERY
                                </a>
                            </Link>

                            <Link to="/contact">
                                <a className="text-gray-700 hover:text-[#FFAC75]">
                                    CONTACT
                                </a>
                            </Link>

                            <Link to="/book">
                                <a className="bg-[#FFAC75] text-gray-800 px-4 py-2 rounded hover:bg-[#FF8E50]">
                                    BOOK ONLINE
                                </a>
                            </Link>

                        </nav>
                    </div>
                </header>

            </div>

            <div className="bg-[#4452AC] text-white min-h-screen">
                {/* Header Section */}
                <div className="bg-white py-56 relative">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                        {/* Text Section */}
                        <div className=" about-text w-full md:w-2/3 mr-[10rem]">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">About me</h1>
                            <p className="text-gray-600 mb-4 text-xl">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <p className="text-gray-600 text-xl">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/3">
                            <img
                                src={dentistImg}
                                alt="Dentist"
                                className="shadow-lg w-[35rem] object-cover md:absolute right-0 top-0 h-full"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* <a href="/services"> */}
                <div className="bg-[#4452AC] text-white py-1">
                    <div className="max-w-7xl mx-auto px-4">

                        <h2 className="services-title text-center text-5xl font-bold mb-12">Services</h2>

                        {/* Service 1 */}
                        <div className="bg-white rounded-[1rem] p-10 flex flex-col md:flex-row items-center mb-12">
                            <div className="service-text ml-5">
                                <h3 className="text-2xl font-bold text-black mb-4">Root canal treatment</h3>
                                <p className="text-black w-[30rem]">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>

                            <div className="service-img flex justify-center items-center ml-48 mt-6 md:mt-0 border-[0.4rem] border-[#4452AC] rounded-[2rem]">
                                <img
                                    src={servicePic}
                                    alt="Root canal treatment"
                                    className="w-[50rem] max-w-md border-[0.8rem] border-white rounded-[2rem]" />
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-[1rem] p-10 flex flex-col md:flex-row-reverse items-center mb-12">
                            <div className="service-text1 md:w-1/2 md:pl-6">
                                <h3 className="text-2xl font-bold text-black mb-4">Pink and White Aesthetics</h3>
                                <p className="text-black w-[30rem]">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>
                            <div className="flex justify-center items-center mr-48 mt-6 md:mt-0 border-[0.4rem] border-[#4452AC] rounded-[2rem]">
                                <img
                                    src={servicePic}
                                    alt="Root canal treatment"
                                    className="w-[50rem] max-w-md border-[0.8rem] border-white rounded-[2rem]" />
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-[1rem] p-10 flex flex-col md:flex-row items-center mb-12">
                            <div className="service-text md:w-1/2 md:pr-6 ml-10">
                                <h3 className="text-2xl font-bold text-black mb-4">Composite restorations</h3>
                                <p className="text-black">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>
                            <div className="service-img flex justify-center items-center ml-48 mt-6 md:mt-0 border-[0.4rem] border-[#4452AC] rounded-[2rem]">
                                <img
                                    src={servicePic}
                                    alt="Root canal treatment"
                                    className="w-[50rem] max-w-md border-[0.8rem] border-white rounded-[2rem]" />
                            </div>
                        </div>

                    </div>
                </div>
            {/* </a> */}

            <div className="bg-white py-16">
                <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center ml-[4rem] mr-[5rem]">
                    <div className="w-full md:w-1/2 px-4 mr-[5rem]">
                        <img
                            src={XrayImg}
                            alt="Dentist"
                            className="rounded-[1rem] shadow-lg w-full" />
                    </div>

                    <div className="x-ray w-full md:w-1/2 px-4">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dental x-rays</h1>
                        <p className="text-gray-600 mb-4">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo.
                        </p>
                        <p className="text-gray-600">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.
                        </p>
                    </div>

                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#4452AC] py-2 text-white">
                <div className="max-w-5xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 px-4">
                    {/* Working Hours */}

                    <div>
                        <h3 className="text-3xl mb-4">Working hours</h3>
                        <ul className="text-xl space-y-2">
                            <li>Mon 9:00 am - 5:00 pm</li>
                            <li>Tue 9:00 am - 5:00 pm</li>
                            <li>Wed 9:00 am - 5:00 pm</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="text-xl mt-12 space-y-2">
                            <li>Thu 9:00 am - 5:00 pm</li>
                            <li>Fri 9:00 am - 5:00 pm</li>
                            <li>Sat 9:00 am - 5:00 pm</li>

                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-3xl mb-4">Contact me</h3>
                        <ul className="text-xl space-y-2">
                            <li>
                                <a
                                    href="tel:(718) 942-9942"
                                    className="text-[#FFAC75] hover:underline"
                                >
                                    (718) 942-9942
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@grandstreetdental.com"
                                    className="text-[#FFAC75] hover:underline"
                                >
                                    hello@grandstreetdental.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6 text-sm">
                    &copy; CREDITS/CREATORS/NAME
                </div>
            </footer>


        </>




    );
};

export default About;
