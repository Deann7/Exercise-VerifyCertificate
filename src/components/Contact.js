"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const [animationState, setAnimationState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setNotification({
        type: "error",
        message: "Please fill all fields before submitting!",
      });
      setAnimationState("error");

      setTimeout(() => {
        setAnimationState("slide-down");
      }, 3000);

      setTimeout(() => {
        setNotification(null);
        setAnimationState("");
      }, 5000);

      return;
    }

    const serviceId = "service_q2t5t94";
    const templateId = "template_lfthhvi";
    const publicKey = "bj0yAmKBBDdgZENRD";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_phone: phone,
        to_name: "Exercise FTUI 2025",
        message: message,
      },
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setNotification({
        type: "success",
        message: "Email sent successfully!",
      });
      setAnimationState("success");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => {
        setAnimationState("slide-down");
      }, 3000);

      setTimeout(() => {
        setNotification(null);
        setAnimationState("");
      }, 5000);
    } catch (error) {
      setNotification({
        type: "error",
        message: "Error sending email, please try again.",
      });
      setAnimationState("error");
    }
  };

  return (
    <div id="contact" className="h-screen bg-white flex items-center justify-center px-4 sm:px-8 relative">
      <img
        src="/ak3.png"
        alt="Decoration Right"
        className="absolute top-0 right-0 w-24 sm:w-24 md:w-56 h-auto animate-float opacity-40 z-10"
      />
      <img
        src="/al3.png"
        alt="Decoration Left"
        className="absolute top-0 left-0 w-24 sm:w-24 md:w-56 h-auto animate-float delay-150 opacity-40 z-10"
      />

      <div className="flex flex-col items-center w-full max-w-5xl mt-[-20px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-950 mb-4 md:mb-4 transform hover:scale-102 transition-all duration-300 mt-[-40px]">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row bg-stone-100 rounded-xl shadow-[0px_0px_30px_rgba(0,0,0,0.25)] overflow-hidden w-full z-30 max-w-screen-xl">
          <div className="bg-sky-950 text-white w-full md:w-3/5 p-4 sm:p-6">
            <div className="flex items-center justify-center mb-6 transform hover:scale-105 transition-all duration-300">
              <img src="/exerp.png" alt="Exercise Logo" className="h-8 sm:h-12 w-auto" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 px-4 rounded-md border border-gray-300 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring focus:ring-sky-700"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 px-4 rounded-md border border-gray-300 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring focus:ring-sky-700"
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 px-4 rounded-md border border-gray-300 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring focus:ring-sky-700"
              />
              <textarea
                placeholder="Message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 px-4 rounded-md border border-gray-300 text-sm sm:text-base text-gray-800 focus:outline-none focus:ring focus:ring-sky-700"
              />
              <button
                type="submit"
                className="w-full p-2 rounded-md bg-sky-700 text-sm sm:text-base font-semibold hover:bg-sky-800 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full md:w-2/5 bg-stone-100 p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 transform hover:scale-102 transition-all duration-300">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8 sm:mb-16">
                You can also contact me through some social media below
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 transform hover:translate-x-2 transition-all duration-300">
                  <img src="/telp.png" alt="Phone" className="w-5 h-5" />
                  <span className="text-gray-800">+62 857 1903 6569</span>
                </li>
                <li className="flex items-center gap-3 transform hover:translate-x-2 transition-all duration-300">
                  <img src="/email.png" alt="Email" className="w-5 h-4" />
                  <span className="text-gray-800">nelsonlaurensius1234@gmail.com</span>
                </li>
              </ul>

              <div className="flex items-center gap-8">
                <a href="#" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <img src="/linked.png" alt="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
                <a href="#" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <img src="/insta.png" alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {notification && (
        <div
          className={`fixed top-10 z-50 left-1/2 transform -translate-x-1/2 p-3 rounded-lg text-light z-20 ${notification.type === "success" ? "bg-green-500" : "bg-red-500"} shadow-lg transition-all duration-500 opacity-100 ${animationState === "success" ? "slide-up" : animationState === "error" ? "slide-up" : "slide-down"}`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}
