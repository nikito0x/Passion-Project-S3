import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const BookingForm = () => {
    // State to manage form data. Each field corresponds to a booking detail.
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        appointmentType: "",
        appointmentDate: "",
        appointmentTime: "",
    });

    // Memoized array of default timeslots to avoid unnecessary re-creation on each render.
    const timeslots = useMemo(() => [
        "Pick a timeslot",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
    ], []);

    // State to manage available timeslots dynamically based on selected appointment date.
    const [availableTimes, setAvailableTimes] = useState(timeslots);

    // Effect to update available timeslots whenever the appointment date changes.
    useEffect(() => {
        // Retrieve existing bookings from local storage (default to an empty array if none exist).
        const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

        if (formData.appointmentDate) {
            // Filter times that are already booked on the selected date.
            const bookedTimes = savedBookings
                .filter((b) => b.appointmentDate === formData.appointmentDate)
                .map((b) => b.appointmentTime);

            // Update available times by excluding booked times.
            setAvailableTimes(
                timeslots.filter((time) => !bookedTimes.includes(time))
            );
        } else {
            // Reset available times to default timeslots if no date is selected.
            setAvailableTimes(timeslots);
        }
    }, [formData.appointmentDate, timeslots]); // Dependencies ensure effect runs only when date or timeslots change.

    // Handle changes in form inputs and update the corresponding field in state.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Validate and confirm the booking, then save it to local storage.
    const confirmBooking = () => {
        const { name, email, phone, appointmentType, appointmentDate, appointmentTime } = formData;

        // Alert if any field is missing.
        if (!name || !email || !phone || !appointmentType || !appointmentDate || !appointmentTime) {
            alert("Please fill in all fields.");
            return;
        }

        // Retrieve existing bookings from local storage.
        const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

        // Check if the selected timeslot is already booked.
        const isBooked = savedBookings.some(
            (b) => b.appointmentDate === appointmentDate && b.appointmentTime === appointmentTime
        );

        if (isBooked) {
            alert("This timeslot is already booked. Please choose another one.");
            return;
        }

        // Save the booking and notify the user.
        savedBookings.push(formData);
        localStorage.setItem("bookings", JSON.stringify(savedBookings));
        alert("Booking confirmed!");

        // Reset the form after successful booking.
        setFormData({
            name: "",
            email: "",
            phone: "",
            appointmentType: "",
            appointmentDate: "",
            appointmentTime: "",
        });
    };


    return (
        <>
            {/* NAVIGATION */}
            <div className="navigartion bg-[#4452AC] text-white">
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
                        <Link to="/">
                            <h1 className="logo text-3xl font-bold text-gray-800">FAIRY CARE</h1>
                        </Link>

                        <nav className="space-x-6">
                            {/* <Link to="/about" className="text-gray-700 hover:text-[#FFAC75]">ABOUT</Link> */}
                            <Link to="/about" className="text-gray-700 hover:text-[#FFAC75]">SERVICES</Link>
                            <Link to="/gallery" className="text-gray-700 hover:text-[#FFAC75]">GALLERY</Link>
                            <Link to="/contact" className="text-gray-700 hover:text-[#FFAC75]">CONTACT</Link>
                            <Link to="/book" className="bg-[#FFAC75] text-gray-800 px-4 py-2 rounded hover:bg-[#FF8E50]">BOOK ONLINE</Link>
                        </nav>
                    </div>
                </header>
            </div>

            {/* BOOKING FORM */}
            <div className="bg-[#4452AC] min-h-screen flex items-center justify-center">
                <div className="book-appointment bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                    <h3 className="text-2xl font-bold text-center mb-6">Appointment Booking</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            confirmBooking();
                        }}
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-1">Patient's Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-1">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block font-semibold mb-1">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="appointmentType" className="block font-semibold mb-1">Type of Appointment:</label>
                            <select
                                id="appointmentType"
                                name="appointmentType"
                                value={formData.appointmentType}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2"
                                required
                            >
                                <option value="Pick a type of booking">Pick a type of booking</option>
                                <option value="Cosmetic consultation">Cosmetic consultation</option>
                                <option value="Orthodontic consultation">Orthodontic consultation</option>
                                <option value="Broken tooth/Crown/Inlay/Filling">Broken tooth/Crown/Inlay/Filling</option>
                                <option value="Emergency consultation">Emergency consultation</option>
                                <option value="Existing patient - exam and cleaning">Existing patient - exam and cleaning</option>
                                <option value="New patient - exam and cleaning">New patient - exam and cleaning</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="appointmentDate" className="block font-semibold mb-1">Date:</label>
                            <input
                                type="date"
                                id="appointmentDate"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="appointmentTime" className="block font-semibold mb-1">Available Timeslots:</label>
                            <select
                                id="appointmentTime"
                                name="appointmentTime"
                                value={formData.appointmentTime}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2"
                                required
                            >
                                {availableTimes.length > 0 ? (
                                    availableTimes.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))
                                ) : (
                                    <option value="" disabled>No available times</option>
                                )}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#FFAC75] hover:bg-[#FF8E50] text-white font-bold py-2 px-4 w-full rounded-md"
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-[#4452AC] py-2 text-white">
                <div className="max-w-5xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 px-4">
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
                    <div>
                        <h3 className="text-3xl mb-4">Contact me</h3>
                        <ul className="text-xl space-y-2">
                            <li>
                                <a href="tel:(718) 942-9942" className="text-[#FFAC75] hover:underline">(718) 942-9942</a>
                            </li>
                            <li>
                                <a href="mailto:hello@grandstreetdental.com" className="text-[#FFAC75] hover:underline">hello@grandstreetdental.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6 text-sm">&copy; CREDITS/CREATORS/NAME</div>
            </footer>
        </>
    );
};

export default BookingForm;
