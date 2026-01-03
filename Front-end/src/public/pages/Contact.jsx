// import React, { useState } from 'react';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import emailjs from 'emailjs-com'
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


// const Contact = () => {
//   const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         mobile: '', // New optional field
//         textMessage: '', // Optional
//         eventTypes: [],
//         plannedDate: ''
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         if (type === 'checkbox') {
//             setFormData(prevState => {
//                 if (checked) {
//                     return { ...prevState, eventTypes: [...prevState.eventTypes, value] };
//                 } else {
//                     return { ...prevState, eventTypes: prevState.eventTypes.filter(item => item !== value) };
//                 }
//             });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         navigate("/payment", {
//   state: {
//     packageName: formData.eventTypes.join(", "),
//     guests: 1,
//     amount: 500,
//     plannedDate: formData.plannedDate,
//     name: formData.name,
//     email: formData.email,
//     mobile: formData.mobile
//   }
// });

//         // Check if at least one event type is selected
//         if (formData.eventTypes.length === 0) {
//             toast.error('Please select at least one event type.');
//             return;
//         }

//         // Prepare EmailJS parameters
//         const templateParams = {
//             name: formData.name,
//             email: formData.email,
//             mobile: formData.mobile,
//             message: formData.textMessage,
//             eventTypes: formData.eventTypes.join(', '),
//             plannedDate: formData.plannedDate,
//         };

//         try {
//             // Sending email using EmailJS
//             const res = await emailjs.send(
//                 'service_pdmvrj4',       // Replace with your EmailJS Service ID
//                 'template_eruf5za',      // Replace with your EmailJS Template ID
//                 templateParams,
//                 'azxkbFKON6T9Z7n8O'          // Replace with your EmailJS User ID
//             );

//             console.log(res);
//             toast.success('Message sent successfully!'); // Show success notification

//             // Reset form data if needed
//             setFormData({
//                 name: '',
//                 email: '',
//                 mobile: '',
//                 textMessage: '',
//                 eventTypes: [],
//                 plannedDate: '',
//             });
//         } catch (error) {
//             console.error(error);
//             toast.error('Failed to send the message. Please try again.'); // Show error notification
//         }
//     };

//     return (
//         <>
//             <div className="min-h-screen">
//                 {/* Header Section */}
//                 <section
//                     className="mt-6 py-20 relative bg-fixed bg-cover"
//                     style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}
//                 >
//                     <div className="absolute inset-0 bg-black opacity-30"></div>
//                     <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
//                             Contact Us
//                         </h1>
//                     </div>
//                 </section>

//                 {/* Get in Touch Heading */}
//                 <div className='text-center py-11'>
//                     <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium">
//                         Get in Touch
//                     </h1>
//                 </div>

//                 {/* Main Contact Section */}
//                 <div className="container mx-auto px-6 md:px-8 lg:px-16">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                         {/* Contact Form */}
//                         <div className="bg-white p-8 rounded-lg border shadow-lg">
//                             <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                                         Your Name
//                                         <span className='text-red-500'> *</span>
//                                     </label>
//                                     <input
//                                         required
//                                         type="text"
//                                         name="name"
//                                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                                         placeholder="Enter Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                         Your Email
//                                         <span className='text-red-500'> *</span>
//                                     </label>
//                                     <input
//                                         required
//                                         type="email"
//                                         name="email"
//                                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                                         placeholder="you@example.com"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//                                         Your Mobile
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="mobile"
//                                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                                         placeholder="Enter Mobile Number"
//                                         value={formData.mobile}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                                         Your Message
//                                     </label>
//                                     <textarea
//                                         name="textMessage"
//                                         rows="2"
//                                         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                                         placeholder="Write your message here..."
//                                         value={formData.textMessage}
//                                         onChange={handleChange}
//                                     ></textarea>
//                                 </div>

//                                 {/* Flex container for Event Type and Planned Date */}
//                                 <div className="flex space-x-6">
//                                     {/* Event Type Section */}
//                                     <div className="flex-1">
//                                         <span className="block text-sm font-medium text-gray-700 mb-2">
//                                             Type of Event
//                                             <span className='text-red-500'> *</span>
//                                         </span>
//                                         <div className="space-y-2">
//                                             {[
//                                                 'Family Day Picnic',
//                                                 'Family Night Camping',
//                                                 'Group Day Picnic',
//                                                 'Group Night Picnic',
//                                                 'Corporate Event',
//                                                 'Family Event',
//                                                 'School Picnic'
//                                             ].map((eventType) => (
//                                                 <label key={eventType} className="flex items-center">
//                                                     <input
//                                                         type="checkbox"
//                                                         name="eventTypes"
//                                                         value={eventType}
//                                                         checked={formData.eventTypes.includes(eventType)}
//                                                         onChange={handleChange}
//                                                         className="mr-2"
//                                                     />
//                                                     {eventType}
//                                                 </label>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Planned Date Section */}
//                                     <div className="flex-1">
//                                         <span className="block text-sm font-medium text-gray-700 mb-2">
//                                             Planned Date
//                                             <span className='text-red-500'> *</span>
//                                         </span>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center">
//                                                 <input
//                                                     type="radio"
//                                                     name="plannedDate"
//                                                     value="Immediately"
//                                                     checked={formData.plannedDate === 'Immediately'}
//                                                     onChange={handleChange}
//                                                     className="mr-2"
//                                                     required
//                                                 />
//                                                 Immediately
//                                             </label>
//                                             <label className="flex items-center">
//                                                 <input
//                                                     type="radio"
//                                                     name="plannedDate"
//                                                     value="In 15 days"
//                                                     checked={formData.plannedDate === 'In 15 days'}
//                                                     onChange={handleChange}
//                                                     className="mr-2"
//                                                     required
//                                                 />
//                                                 In 15 days
//                                             </label>
//                                             <label className="flex items-center">
//                                                 <input
//                                                     type="radio"
//                                                     name="plannedDate"
//                                                     value="In 30 days"
//                                                     checked={formData.plannedDate === 'In 30 days'}
//                                                     onChange={handleChange}
//                                                     className="mr-2"
//                                                     required
//                                                 />
//                                                 In 30 days
//                                             </label>
//                                             <label className="flex items-center">
//                                                 <input
//                                                     type="radio"
//                                                     name="plannedDate"
//                                                     value="In 60 days"
//                                                     checked={formData.plannedDate === 'In 60 days'}
//                                                     onChange={handleChange}
//                                                     className="mr-2"
//                                                     required
//                                                 />
//                                                 In 60 days
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div>
//                                      <Link to={"/payment"}>
//                                     <button
//                                         type="submit"
//                                         className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300"
//                                     >
//                                         Send Message
//                                     </button>
//                                     </Link>
//                                 </div>
//                             </form>
//                         </div>

//                         {/* Contact Information + QR Code */}
//                         <div className="bg-white p-8 rounded-lg border shadow-lg">
//                             <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
//                             <p className="text-gray-700 mb-4">
//                                 Feel free to contact us through any of the means below.
//                             </p>
//                             <ul className="space-y-6">
//                                 <li className="flex items-center">
//                                     <FaPhoneAlt className="text-green-500 w-6 h-6" />
//                                     <span className="ml-4 text-gray-800">7620723370 , 9923461951 ,  9820195565 </span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <FaEnvelope className="text-green-500 w-6 h-6" />
//                                     <span className="ml-4 text-gray-800">vanutsavagrotourism@gmail.com</span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <FaMapMarkerAlt className="text-green-500 w-6 h-6" />
//                                     <span className="ml-4 text-gray-800">
//                                         Gut No 36, Murshadkulli, Mahalpimpri, Chhatrapati SambhajiNagar, Maharashtra 431007
//                                     </span>
//                                 </li>
//                             </ul>

//                             {/* QR Code */}
//                             <div className="mt-8">
//                                 <h3 className="text-lg font-medium mb-4">Scan Our QR Code & Visit Our Site</h3>
//                                 <div className="flex justify-center">
//                                     <img
//                                         src="/photos/QR Code Website Post.png"
//                                         alt="QR Code"
//                                         className="w-56 h-44 object-contain"
//                                     />
//                                 </div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="relative h-full mx-5">
//                 <iframe
//                     className="py-5 top-0 left-0 w-full h-80"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9881425359677!2d75.4380903!3d19.9249045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbb55f98ad693%3A0x6ceb02eeff2e44a5!2sVan%20Utsav%20Agro%20Tourism%20Rd%2C%20Maharashtra%20431007!5e0!3m2!1sen!2sin!4v1727167897536!5m2!1sen!2sin"
//                     style={{ border: "0" }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             </div>


//             <ToastContainer />
//         </>
//     );
// };

// export default Contact;
// // contact.jsx



// // ************************************
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Contact() {
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     mobile: "",
// //     eventType: "",
// //     plannedDate: "",
// //     guests: 2,
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // 💾 Save form data in localStorage
// //     localStorage.setItem("bookingData", JSON.stringify(form));

// //     // 🔁 Redirect to payment page
// //     navigate("/payment");
// //   };

// //   return (
// //     <div className="contact-container">
// //       <h2>Send Us a Message</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input name="name" placeholder="Your Name" onChange={handleChange} required />
// //         <input name="email" placeholder="Your Email" onChange={handleChange} required />
// //         <input name="mobile" placeholder="Your Mobile" onChange={handleChange} required />
// //         <select name="eventType" onChange={handleChange} required>
// //           <option value="">Select Event Type</option>
// //           <option value="Adventure Trip">Adventure Trip</option>
// //           <option value="Family Picnic">Family Picnic</option>
// //           <option value="Corporate Event">Corporate Event</option>
// //         </select>
// //         <select name="plannedDate" onChange={handleChange} required>
// //           <option value="">Select Planned Date</option>
// //           <option value="Immediately">Immediately</option>
// //           <option value="In 15 days">In 15 days</option>
// //           <option value="In 30 days">In 30 days</option>
// //         </select>

// //         <input
// //           name="guests"
// //           type="number"
// //           min="1"
// //           value={form.guests}
// //           onChange={handleChange}
// //           placeholder="Guests"
// //         />

// //         <button type="submit" className="btn">Proceed to Payment</button>
// //       </form>
// //     </div>
// //   );
// // }
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    textMessage: '',
    eventTypes: [],
    plannedDate: '',
    adults: 1,
    kids: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        eventTypes: checked
          ? [...prev.eventTypes, value]
          : prev.eventTypes.filter(item => item !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateAmount = () => {
    let total = 0;

    formData.eventTypes.forEach(type => {
      if (type === "Family Day Picnic" || type === "Group Day Picnic" || type === "School Picnic") {
        total += formData.adults * 799 + formData.kids * 399;
      }

      if (type === "Family Night Camping" || type === "Group Night Picnic") {
        total += formData.adults * 1199 + formData.kids * 799;
      }

      if (type === "Corporate Event" || type === "Family Event") {
        total += formData.adults * 1499 + formData.kids * 899;
      }
    });

    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.eventTypes.length === 0) {
      toast.error("Please select at least one event type.");
      return;
    }

    const amount = calculateAmount();

    navigate("/payment", {
      state: {
        packageName: formData.eventTypes.join(", "),
        adults: formData.adults,
        kids: formData.kids,
        amount: amount,
        plannedDate: formData.plannedDate,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile
      },
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.textMessage,
      eventTypes: formData.eventTypes.join(', '),
      plannedDate: formData.plannedDate,
      adults: formData.adults,
      kids: formData.kids,
      amount: amount,
    };

    try {
      await emailjs.send(
        'service_pdmvrj4',
        'template_eruf5za',
        templateParams,
        'azxkbFKON6T9Z7n8O'
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        textMessage: "",
        eventTypes: [],
        plannedDate: "",
        adults: 1,
        kids: 0,
      });

    } catch (error) {
      toast.error("Failed to send the message.");
    }
  };

  return (
    <>
      <div className="min-h-screen">
        {/* HEADER */}
        <section
          className="mt-6 py-20 relative bg-fixed bg-cover"
          style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative max-w-5xl mx-auto px-4 z-10 text-center">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Contact Us</h1>
          </div>
        </section>

        {/* Get in Touch */}
        <div className="text-center py-11">
          <h1 className="text-4xl font-medium">Get in Touch</h1>
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* FORM */}
            <div className="bg-white p-8 rounded-lg border shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-md"
                    placeholder="Enter Name"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-md"
                    placeholder="you@example.com"
                  />
                </div>

                {/* MOBILE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-md"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    name="textMessage"
                    rows="2"
                    value={formData.textMessage}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-md"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                {/* EVENT & PLANNED DATE */}
                <div className="flex space-x-6">
                  
                  {/* EVENT TYPE */}
                  <div className="flex-1">
                    <span className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Event <span className="text-red-500">*</span>
                    </span>

                    <div className="space-y-2">
                      {[
                        "Family Day Picnic",
                        "Family Night Camping",
                        "Group Day Picnic",
                        "Group Night Picnic",
                        "Corporate Event",
                        "Family Event",
                        "School Picnic"
                      ].map(event => (
                        <label key={event} className="flex items-center">
                          <input
                            type="checkbox"
                            name="eventTypes"
                            value={event}
                            checked={formData.eventTypes.includes(event)}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          {event}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* PLANNED DATE */}
                  <div className="flex-1">
                    <span className="block text-sm font-medium text-gray-700 mb-2">
                      Planned Date <span className="text-red-500">*</span>
                    </span>

                    <div className="space-y-2">
                      {["Immediately", "In 15 days", "In 30 days", "In 60 days"].map(date => (
                        <label key={date} className="flex items-center">
                          <input
                            type="radio"
                            name="plannedDate"
                            value={date}
                            checked={formData.plannedDate === date}
                            onChange={handleChange}
                            className="mr-2"
                            required
                          />
                          {date}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ADULTS + KIDS */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Adults
                    </label>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      value={formData.adults}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Kids
                    </label>
                    <input
                      type="number"
                      name="kids"
                      min="0"
                      value={formData.kids}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>

            {/* RIGHT SIDE INFO */}
            <div className="bg-white p-8 rounded-lg border shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <ul className="space-y-6 text-gray-700">
                <li className="flex items-center">
                  <FaPhoneAlt className="text-green-500 w-6 h-6" />
                  <span className="ml-4">7620723370 , 9923461951 , 9820195565</span>
                </li>

                <li className="flex items-center">
                  <FaEnvelope className="text-green-500 w-6 h-6" />
                  <span className="ml-4">vanutsavagrotourism@gmail.com</span>
                </li>

                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-green-500 w-6 h-6" />
                  <span className="ml-4">
                    Gut No 36, Murshadkulli, Mahalpimpri, Chhatrapati SambhajiNagar, Maharashtra 431007
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Scan Our QR Code & Visit Our Site</h3>
                <div className="flex justify-center">
                  <img src="/photos/QR Code Website Post.png" className="w-56 h-44 object-contain" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="mx-5">
        <iframe
          className="py-5 w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <ToastContainer />
    </>
  );
};

export default Contact;
