"use client";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

export default function Home() {
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const code = event.target.code.value.replace(/-/g, "");

    if (!code) {
      setNotification({
        message: "Please enter a certificate code!",
        color: "bg-red-500 text-white",
      });
      setTimeout(() => setNotification(null), 2000); // Remove notification after 2 seconds
      return;
    }

    setNotification({ message: "Verifying...", color: "bg-white text-black" });
    setIsLoading(true);

    try {
      const certificatesRef = collection(db, "certificates");
      const q = query(certificatesRef, where("code", "==", code));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const certificate = querySnapshot.docs[0].data();
        setNotification({
          message: (
            <>
              <div>Certificate Verified!</div>
              <div>
                {certificate.name} | "{certificate.title}"
              </div>
              <div>Published Year : {certificate.year}</div>
            </>
          ),
          color: "bg-green-500 text-white text-center",
        });
        setTimeout(() => setNotification(null), 5000); // Remove notification after 5 seconds
      } else {
        setNotification({
          message: "Certificate with the given ID was not found!",
          color: "bg-red-500 text-white",
        });
        setTimeout(() => setNotification(null), 2000); // Remove notification after 2 seconds
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setNotification({
        message: "An error occurred. Please try again.",
        color: "bg-red-500 text-white",
      });
      setTimeout(() => setNotification(null), 2000); // Remove notification after 2 seconds
    }

    setIsLoading(false);
  };

  return (
    <div
      id="home"
      className="flex flex-col bg-gradient-to-b from-sky-950 to-white items-center justify-center text-center min-h-screen relative overflow-hidden"
    >
      <div>
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-16 md:mb-16 relative z-10 transition-all duration-300">
          EXCERCISE Verify
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 relative z-10 animate-slideUp">
          Verify Your Certificate!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 px-4 animate-slideUp delay-200"
        >
          <input
            type="text"
            name="code"
            placeholder="Enter certificate ID (XXXX-XXXX-XXXX)"
            className="w-full sm:w-[350px] md:w-[450px] lg:w-[550px] p-3 rounded-lg border border-blue-100 
                     text-gray-800 shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-sky-300
                     transform hover:scale-102 transition-all duration-300"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-auto p-3 px-8 rounded-lg shadow-sm shadow-black bg-sky-950 text-white 
                     font-semibold hover:bg-sky-900 transition-all duration-300 transform hover:scale-105
                     ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1"}`}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>

      {notification && (
        <div
          className={`fixed bottom-6 z-50 max-w-md w-11/12 p-4 rounded-lg 
                    shadow-md text-center font-bold ${notification.color} animate-slideUp`}
        >
          {notification.message}
        </div>
      )}

      <img
        src="/bk1.png"
        alt="Decoration"
        className="absolute bottom-0 right-0 w-28 sm:w-40 md:w-80 h-auto transition-all duration-300 animate-float opacity-40"
      />
      <img
        src="/ak1.png"
        alt="Decoration"
        className="absolute top-0 right-0 w-40 sm:w-60 md:w-80 h-auto transition-all duration-300 animate-float delay-150 opacity-50"
      />
    </div>
  );
}
