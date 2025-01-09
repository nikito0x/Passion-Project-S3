import React from "react";
// import CSS from "../index.css";

import { Link } from "react-router-dom"; // Import Link from React Router

import heroPic from "../pictures/hero-pic.jpg";
import DentistPic from "../pictures/doctor.jfif";
import SmilePic from "../pictures/smile-pic.jpg";
import BigImage from "../pictures/patient1.jpg";
import HoverImage from "../pictures/hover.jpg";



const Home = () => {
  return (
    <div className="bg-[#4452AC] text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
          {/* Logo */}

          <Link to="/">
            <h1 className="logo text-3xl font-bold text-gray-800">FAIRY CARE</h1>
          </Link>

          <nav className="space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-[#FFAC75]">
              ABOUT
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-[#FFAC75]">
              SERVICES
            </Link>

            <Link to="/gallery" className="text-gray-700 hover:text-[#FFAC75]">
              GALLERY
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-[#FFAC75]">
              CONTACT
            </Link>

            <Link to="/book" className="bg-[#FFAC75] text-gray-800 px-4 py-2 rounded hover:bg-[#FF8E50]"
            >BOOK ONLINE
            </Link>

          </nav>
        </div>
      </header>


      {/* Hero Section */}
      <section
        className="relative bg-cover bg-top h-[650px]"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div className="flex flex-col items-center justify-end h-full text-center text-white px-6 pb-16">
          <div>
            <h2 className="font-bold text-[5rem]">Exceptional care for all ages</h2>

            <Link to="/book"

              className="mt-2 shadow-md inline-block bg-[#FFAC75] text-gray-800 px-6 py-3 rounded hover:bg-[#FF8E50]"
            >
              BOOK ONLINE

            </Link>
            <p className="text-lg mt-4">OR CALL 0044667788</p>
          </div>
        </div>
      </section>



      {/* About Me Section */}
      <section id="about" className="bg-white py-10 px-24 text-gray-800 mt-8">
        <div className="max-w-10xl mx-auto px-19 grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-2xl stext-gray-800">
              Galina Koleva is a highly experienced dental practitioner offering exceptional care
              for patients of all ages... Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Image Section */}
          <div className="about-image flex justify-center md:justify-end">
            <div className="image-container relative w-[32rem] h-[32rem] rounded-full overflow-hidden border-[0.5rem] border-[#4452AC]">
              <div className="w-full h-full p-3 bg-white">
                <img
                  src={DentistPic}
                  alt="Galina Koleva"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-16 bg-[#4452AC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold text-white mb-14">Services</h3>
          <div className="text-2xl flex justify-center items-center space-x-10">
            {/* Service Items with Stars */}
            {["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"].map(
              (service, index) => (
                <div key={index} className="flex items-center text-white space-x-6">
                  <span className="text-xl">★</span>
                  <span>{service}</span>
                  {/* Separator Line Except for the Last Item */}
                  {index < 4 && <div className="h-6 w-[1px] bg-white mx-2"></div>}
                </div>
              )
            )}
          </div>

          {/* Read More Button */}
          <div className="mt-14">
            <Link to="/about"
              
                className="inline-block bg-[#FFAC75] text-gray-800 px-6 py-3 rounded hover:bg-[#FF8E50] shadow-md"
              >
                READ MORE
            
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-white">
        <div className="max-w-8xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-6">
          {/* Large Image on the Left */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <img
              src={BigImage}
              alt="Main Testimonial Visual"
              className="w-[32rem] h-[41rem] object-cover  shadow-md"
            />
          </div>

          {/* Testimonials on the Right */}
          <div className="py-11 px-10 flex-grow w-full lg:w-2/3">
            <h3 className="text-5xl font-bold text-gray-800 mb-8">
              Kind words from my patients
            </h3>
            <div className="space-y-5">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="relative group border border-gray-400 rounded-[8px] p-6 shadow-sm bg-gray-50 overflow-hidden transition-all duration-300"
                >
                  {/* Testimonial Text */}
                  <p className="text-xl text-gray-700 group-hover:pl-28 transition-all duration-300">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                  </p>

                  {/* Hover Image */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-4 w-20 h-20 rounded-full overflow-hidden shadow-md bg-white transition-all duration-300">
                    <img
                      src={HoverImage}
                      alt={`Patient ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Before & After Section */}
      <section className="bg-[#4452AC] py-20">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
          <div>
            <h3 className="text-5xl font-bold text-white">
              Before & After <br /> Smile transformation
            </h3>
            <p className="text-white text-2xl py-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <Link to="/gallery"
              
                className="mt-6 inline-block bg-[#FFAC75] text-gray-800 px-4 py-2 rounded hover:bg-[#FF8E50]">
                READ MORE
            
            </Link>

          </div>
          <div className="image-container ml-16 flex justify-end">
            <div className="relative w-[47rem] h-[32rem] rounded-3xl overflow-hidden border-[0.5rem] border-white p-4 bg-[#4452AC]">
              <img
                src={SmilePic}
                alt="After Smile"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-800">Visit!</h3>
          <div className="mt-6">
            <iframe
              src="https://maps.google.com/maps?q=dentist%20office&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Location Map"
              className="w-full h-64 rounded-lg shadow-md"
            ></iframe>
          </div>
          <p className="text-gray-600 mt-4 text-xl">
            Address: 12 Bakerstraße, 10115 Berlin, Germany
          </p>
        </div>
      </section>



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


export default Home;