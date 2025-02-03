"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { toast } from "sonner";
import dayjs from "dayjs";
import PopUp from "./PopUp";

const createFallingStar = (delay) => ({
  initial: { y: -100, x: 0, opacity: 0 },
  animate: {
    y: 800,
    x: [0, 80, -80, 0],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      delay: delay,
    },
  },
});

const Home = () => {
  const starDelays = [0.2, 1.5, 0.8, 2.1, 1.2, 0.5, 1.8];
  const [isLoading, setIsLoading] = useState(false);
  const [toastId, setToastId] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const code = event.target.code.value;

    if (!code) {
      toast.error("Please enter a certificate code!");
      return;
    }

    const id = toast.loading("Verifying...");
    setToastId(id);
    setIsLoading(true);

    try {
      const res = await fetch(`/api/certificates/${code}`);
      const data = await res.json();

      toast.dismiss(id);

      if (data) {
        const date = dayjs(data.created_at);
        toast.success(
          <>
            Certificate Verified!
            <div className="font-semibold">
              {data.recipient} | &quot;{data.event}&quot;
            </div>
            <div>Published Year: {date.format("YYYY")}</div>
          </>,
          { duration: 5000 }
        );
        setCertificate(data);
        setModalOpen(true);
      } else {
        toast.error("Certificate with the given ID was not found!");
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-auto pb-10 lg:pb-20 overflow-x-clip relative">
      <PopUp
        modalOpen={modalOpen}
        data={certificate}
        setModalOpen={setModalOpen}
      />
      <div className="w-full h-screen flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-7xl max-md:text-4xl mt-10 lg:mt-20 md:mt-16 sm:mt-12 font-black text-blue_3">
          <motion.span
            className="bg-gradient-to-r from-purple_3 to-gray_2 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Certify
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }}
          >
            Me
          </motion.span>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mt-6 w-full"
          >
            <input
              type="text"
              name="code"
              placeholder="Enter certificate ID (EXXXX-X-XXX-XXX)"
              className="w-full sm:w-[350px] md:w-[450px] lg:w-[550px] p-3 rounded-lg border border-gray-300 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-purple_4 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto p-3 px-8 rounded-lg shadow-md bg-gradient-to-r from-purple_4 to-blue_3 text-white font-semibold ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <div className="p-6">
            <div className="px-4 py-2 w-auto h-auto bg-blue_3 text-white_2">
              <p className="text-5xl max-md:text-2xl font-bold">
                EXERCISE 2025
              </p>
            </div>
          </div>
          <div className="w-full gap-2 text-center">
            <Image
              src="/headerExer.svg"
              alt="headerExer"
              className="w-full h-[100px] z-10"
              width={500}
              height={100}
            />
            <p className="text-blue_3 text-2xl max-md:text-lg font-extrabold italic">
              #IntoTheExerverse
            </p>
          </div>
        </motion.div>
      </div>
      <Image
        src="/hexagonLeft.svg"
        alt="hexagonLeft"
        className="absolute top-20 left-0 hidden lg:block z-0"
        width={200}
        height={200}
      />
      <motion.img
        variants={createFallingStar(starDelays[0])}
        initial="initial"
        animate="animate"
        src="/star1_topLeft.svg"
        alt="star1_topLeft"
        className="absolute top-52 left-64 size-16 max-lg:left-14 max-lg:size-10 z-20"
      />
      <motion.img
        variants={createFallingStar(starDelays[2])}
        initial="initial"
        animate="animate"
        src="/star2_middleLeft.svg"
        alt="star2_middleLeft"
        className="absolute top-[340px] left-[380px] size max-lg:left-20 max-lg:size-7 max-lg:rotate-[28deg] z-20"
      />
      <Image
        src="/polygonRight.svg"
        alt="polygonRight"
        className="absolute top-44 right-0 hidden lg:block z-20"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Home;
