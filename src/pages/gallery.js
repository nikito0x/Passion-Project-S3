import React from "react";
import { Link } from "react-router-dom";

import GalleryImg from "../pictures/gallery3.jpg";
import SmileImg from "../pictures/smile-pic.jpg";




const BeforeAfterGallery = () => {


    return (
        <div className="bg-[#4452AC] min-h-screen flex flex-col justify-between">
            {/* Header Section */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
                    <Link to="/">
                        <h1 className="logo text-3xl font-bold text-gray-800">FAIRY CARE</h1>
                    </Link>

                    <nav className="space-x-6">
                        <Link to="/about" className="text-gray-700 hover:text-[#FFAC75]">
                            ABOUT
                        </Link>

                        <Link to="/about">
                            <a className="text-gray-700 hover:text-[#FFAC75]">
                                SERVICES
                            </a>
                        </Link>

                        <Link to="/gallery" className="text-gray-700 hover:text-[#FFAC75]">
                            GALLERY
                        </Link>

                        <Link to="/contact" className="text-gray-700 hover:text-[#FFAC75]">
                            CONTACT
                        </Link>

                        <Link to="/book"
                            className="bg-[#FFAC75] text-gray-800 px-4 py-2 rounded hover:bg-[#FF8E50]"
                        >BOOK ONLINE
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="bg-[#4452AC] text-gray-800 min-h-screen">
                {/* Hero Section */}
                <div className="relative">
                    <img
                        className="w-full h-[550px] object-cover"
                        src={GalleryImg}
                        alt="Dental procedure"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-7xl font-bold">Before & After Gallery</h1>
                        <p className="text-2xl mt-2">
                            See stunning and life-changing smile transformations!
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-6xl rounded-3xl bg-white mx-auto px-4 py-12">
                    <h3 className="text-4xl font-bold text-center mb-6">See the real progress!</h3>
                    <p className="text-xl text-justify text-gray-600 max-w-3xl mx-auto mb-10">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo.
                    </p>


                    {/* Before & After Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Row 1 */}
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold mb-2">Before</p>
                            <div className="border w-[27rem] rounded-md shadow-md p-2">
                                <img
                                    src={SmileImg}
                                    alt="Before"
                                    className="rounded-sm"
                                />
                            </div>
                        </div>

                        <div className="mb-10 flex flex-col items-center">
                            <p className="text-xl font-semibold mb-2">After</p>
                            <div className="border w-[27rem] rounded-md shadow-md p-2">
                                <img
                                    src={SmileImg}
                                    alt="After"
                                    className="rounded-sm"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold mb-2">Before</p>
                            <div className="border w-[27rem] rounded-md shadow-md p-2">
                                <img
                                    src={SmileImg}
                                    alt="Before"
                                    className="rounded-sm"
                                />
                            </div>
                        </div>

                        <div className="mb-10 flex flex-col items-center">
                            <p className="text-xl font-semibold mb-2">After</p>
                            <div className="border w-[27rem] rounded-md shadow-md p-2">
                                <img
                                    src={SmileImg}
                                    alt="After"
                                    className="rounded-sm"
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold mb-2">Before</p>
                            <div className="border w-[27rem] rounded-md shadow-md p-2">
                                <img
                                    src={SmileImg}
                                    alt="Before"
                                    className="rounded-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold mb-2">After</p>
                            <div className="border w-[27rem] rounded-md shadow-md p-2">
                                <img
                                    src={SmileImg}
                                    alt="After"
                                    className="rounded-sm"
                                />
                            </div>
                        </div>
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


        </div>
    );
};

export default BeforeAfterGallery;