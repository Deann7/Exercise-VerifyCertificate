import Image from "next/image";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const PopUp = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="shadow-xl rounded-lg p-4 w-[680px] h-auto relative">
        <div className="flex justify-between items-center ">
          <h1 className="font-extrabold text-4xl bg-gradient-to-r from-purple_3 to-gray_2 bg-clip-text text-transparent">
            Exercise Certify
          </h1>
          <RiCloseCircleFill className="bg-gray-600 rounded-full size-6 cursor-pointer" />
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="mt-8 bg-gray-300 w-full rounded-lg h-auto p-6">
            <div className="bg-white shadow-lg rounded-lg px-6 w-full h-10 mb-3 flex items-center justify-between">
              <h1 className="text-lg font-medium text-black">
                Certificate ID:{" "}
                <span className="font-semibold">EXXXX-X-XXX-XXX</span>
              </h1>
            </div>
            <div className="w-full h-auto bg-white shadow-lg rounded-lg flex items-center justify-between">
              <Image
                src="/ContohSertifikat.jpg"
                alt="Gambar Sertifikat"
                width={800}
                height={1000}
              />
            </div>
          </div>
          <div className="w-full mt-3 text-left">
            <h1 className="text-black text-lg font-bold mb-2">Details: </h1>
            <div className="grid grid-cols-2 gap-4 w-[80%]">
              <div className="text-black text-md">
                <p>
                  Recipient: <span className="font-semibold">John Doe</span>
                </p>
              </div>
              <div className="text-black text-md">
                <p>
                  As: <span className="font-semibold">Speaker</span>
                </p>
              </div>
              <div className="flex flex-col text-black text-md">
                <p>Issued By Execise For Event:</p>
                <p className="font-semibold">Talkshow Exercise 2025</p>
              </div>
              <div className="text-black text-md">
                <p>
                  Date: <span className="font-semibold">12/12/2025</span>
                </p>
              </div>
            </div>
            <div className="w-full h-auto mt-4">
              <h1 className="text-black text-lg font-bold mb-2">
                Download Certificate:{" "}
              </h1>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-gradient-to-r from-blue_3 to-purple_3 text-white font-semibold p-2 rounded-lg hover:bg-blue-400">
                  as PDF
                </button>
                <button className="bg-gradient-to-r from-blue_3 to-purple_3 text-white font-semibold p-2 rounded-lg hover:bg-blue-400">
                  as PNG
                </button>
                <button className="bg-gradient-to-r from-blue_3 to-purple_3 text-white font-semibold p-2 rounded-lg hover:bg-blue-400">
                  Copy Image
                </button>
              </div>
            </div>
            <div className="w-full h-auto mt-4 px-2">
              <p className="text-black font-medium text-center italic">
                This Certificate is given to{" "}
                <span className="font-semibold">John Doe</span> for his
                participation as a{" "}
                <span className="font-semibold">Speaker</span> in the event{" "}
                <span className="font-semibold">Talkshow Exercise 2025</span> on{" "}
                <span className="font-semibold">12/12/2025</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
