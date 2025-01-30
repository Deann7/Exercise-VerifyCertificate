"use client";

import Image from "next/image";

const Footer = () => {
  const handleClickInstagram = () => {
    window.open("https://www.instagram.com/exercise.ftui/", "_blank");
  };

  const handleClickLinkedin = () => {
    window.open("https://www.linkedin.com/company/exercise-ftui/", "_blank");
  };

  return (
    <div
      className="w-full flex flex-col h-auto font-light"
      style={{
        background:
          "linear-gradient(91.66deg, #383F96 -9.64%, #0D2734 19.66%, #15394A 49.42%, #2B7696 67.43%, #645B87 97.26%)",
      }}
    >
      {/* Desktop Section */}
      <div className="w-full h-full hidden md:flex flex-row m-12">
        <div className="w-1/2 h-full flex flex-col items-center justify-center mt-8">
          <Image src="/Exer-Footer.svg" alt="logo" width={288} height={144} />
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center mr-12">
          <div className="flex flex-row items-start gap-4 px-8 pr-24">
            <Image src="/location.svg" alt="location" width={24} height={24} />
            <p className="text-md text-white">
              Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir
              R Roosseno, Kukusan, Beji, Depok City, West Java 16425
            </p>
          </div>
          <div className="flex flex-row items-start gap-4 px-8 mt-6">
            <Image src="/email.svg" alt="email" width={24} height={24} />
            <p className="text-md text-white">hr@exerciseftui.com</p>
          </div>
          <div className="flex flex-col items-start gap-2 px-8 mt-6">
            <p className="text-md text-white font-extrabold">Follow us</p>
            <div className="flex flex-row gap-4">
              <Image
                src="/instagramWhite.svg"
                alt="instagram"
                width={24}
                height={24}
                onClick={handleClickInstagram}
                className="cursor-pointer"
              />
              <Image
                src="/linkedinWhite.svg"
                alt="linkedin"
                width={24}
                height={24}
                onClick={handleClickLinkedin}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden flex flex-row gap-10 px-4 pt-8 h-auto">
        <div className="w-full grid grid-cols-8 gap-2 h-full">
          <div className="col-span-5 grid grid-rows-2 space-y-4 items-center justify-center h-full">
            <Image src="/Exer-Footer.svg" alt="logo" width={160} height={80} />
            <div className="flex gap-2 items-center">
              <Image src="/location.svg" alt="location" width={24} height={24} />
              <p className="text-[10px] text-white">
                Faculty of Engineering, University of Indonesia, Jl. Prof. DR.
                Ir R Roosseno, Kukusan, Beji, Depok City, West Java 16425
              </p>
            </div>
          </div>
          <div className="col-span-3 grid grid-rows-2 h-full flex flex-col gap-7">
            <div className="row-span-1 flex flex-col items-start gap-2">
              <p className="text-lg text-white font-medium">Follow us</p>
              <div className="flex flex-row gap-4">
                <Image
                  src="/instagramWhite.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  onClick={handleClickInstagram}
                  className="cursor-pointer"
                />
                <Image
                  src="/linkedinWhite.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                  onClick={handleClickLinkedin}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex row-span-1 gap-2 items-center text-xs">
              <Image src="/email.svg" alt="email" width={20} height={20} />
              <p className="text-md text-white truncate">
                hr@exerciseftui.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-2 mb-4 lg:mb-10 flex items-center justify-center">
        <p className="text-white text-md">© 2025 Exercise FTUI.</p>
      </div>
    </div>
  );
};

export default Footer;
