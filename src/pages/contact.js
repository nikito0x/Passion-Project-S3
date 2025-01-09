import React, { useState } from "react";
import { Link } from "react-router-dom";

import ContactImage from "../pictures/contact-img.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // CHANGE EMAIL LATER
    const mailtoLink = `mailto:hello@grandstreetdental.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(
      email
    )}`;

    window.location.href = mailtoLink;
  };

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
              <a href="" className="text-gray-700 hover:text-[#FFAC75]">
                SERVICES
              </a>
            </Link>

            <Link to="/gallery" className="text-gray-700 hover:text-[#FFAC75]">
              GALLERY
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-[#FFAC75]">
              CONTACT
            </Link>

            <Link
              to="/book"
              className="bg-[#FFAC75] text-gray-800 px-4 py-2 rounded hover:bg-[#FF8E50]"
            >BOOK ONLINE
            </Link>
          </nav>
        </div>
      </header>


      {/* Contact Section */}
      <div className="contact-section bg-white rounded-lg shadow-lg mx-auto my-12 max-w-5xl flex flex-col md:flex-row">
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Inquiries: Contact Our Dental Office
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFAC75]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFAC75]"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFAC75]"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#FFAC75] text-white py-3 rounded-lg hover:bg-[#FF8E50]">
              SUBMIT
            </button>
          </form>
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

export default Contact;
