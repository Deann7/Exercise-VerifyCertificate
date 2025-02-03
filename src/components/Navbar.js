"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(currentPath === "/");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navbarText = [];

  const { scrollY } = useScroll();
  const [isHidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous ? latest > previous : false) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setHidden(false);
      }, 1500);
    };

    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="fixed z-20 w-full px-4 py-3 lg:py-8 lg:px-16">
      <motion.div
        className="hidden lg:flex justify-center w-full items-center"
        initial={{ opacity: 0, y: isFirstRender ? -50 : 0 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "-150%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{
          duration: isFirstRender ? 0.8 : 0.3,
          ease: isFirstRender ? "easeOut" : "easeInOut",
          delay: isFirstRender ? 1.5 : 0,
        }}
      >
        <div
          className="px-16 py-5 h-auto flex justify-between rounded-xl backdrop-blur-md shadow-lg w-full items-center"
          style={{
            background:
              "linear-gradient(89.92deg, #383F96 -30.15%, #15394A 30.04%, #3A698C 66.29%, #55457E 120.87%, #504B80 120.88%)",
            boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="w-auto">
            <Link href="/">
              <Image
                src="/Exer-light.png"
                alt="logo"
                className="w-32 aspect-contain"
                width={128}
                height={40}
              />
            </Link>
          </div>
          <div className="w-auto flex justify-end space-x-8 items-center">
            {currentPath === "/" &&
              navbarText.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white tracking-wider text-xl hover:underline"
                >
                  {item.title}
                </a>
              ))}
            <Link
              href="#about"
              className="text-white tracking-wider text-xl hover:underline"
            >
              About Us
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={mobileMenuRef}
        className="lg:hidden flex flex-col h-auto relative items-start w-full"
        initial={{ opacity: 0, y: isFirstRender ? -50 : 0 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "-150%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{
          duration: isFirstRender ? 0.8 : 0.3,
          ease: isFirstRender ? "easeOut" : "easeInOut",
          delay: isFirstRender ? 1.5 : 0,
        }}
      >
        <div
          className={`w-full py-3 flex justify-between items-center px-6 shadow-xl ${
            isMobileMenuOpen ? "rounded-t-xl" : "rounded-xl"
          }`}
          style={{
            background:
              "linear-gradient(98.41deg, #383F96 -6.59%, #0D2734 33.69%, #2B7696 57.86%, #55457E 94.11%, #504B80 94.11%)",
          }}
        >
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/dteExer.png"
              alt="logo"
              className="w-16 aspect-contain"
              width={64}
              height={24}
            />
          </Link>

          {!isMobileMenuOpen ? (
            <Menu size={40} color="white" onClick={toggleMobileMenu} />
          ) : (
            <X size={37} color="white" onClick={toggleMobileMenu} />
          )}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1, originY: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, scaleY: 0, originY: 0 }}
              className="w-full absolute top-[99%] rounded-b-xl shadow-xl flex flex-col space-y-3 px-5 pt-4 pb-8"
              style={{
                background:
                  "linear-gradient(104.19deg, #383F96 -9.53%, #0D2734 24.8%, #2B7696 59.91%, #55457E 74.98%, #504B80 74.98%)",
              }}
            >
              {currentPath === "/" &&
                navbarText.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white tracking-wide"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              <Link
                href="#about"
                className="text-white tracking-wider text-xl hover:underline"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navbar;
