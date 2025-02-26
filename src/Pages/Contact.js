import React, { useState } from "react";
import emailjs from "emailjs-com";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "your_service_id", // Replace with EmailJS Service ID
        "your_template_id", // Replace with EmailJS Template ID
        formData,
        "your_user_id" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setFormData({ name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Email failed to send.");
        }
      );
  };

  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions, please drop a mail
      </h1>
      
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>

      <span className="text-center text-content text-xl font-light block">or</span>

      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <label className="block mb-2 text-lg font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mt-4 mb-2 text-lg font-semibold">Your Email</label>
        <input
  type="email"
  name="user_email"
  value={formData.user_email}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


        <label className="block mt-4 mb-2 text-lg font-semibold">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;
