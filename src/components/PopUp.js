import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const PopUp = ({ modalOpen, data, setModalOpen }) => {
  
  const date = dayjs(data?.created_at).format("DD/MM/YYYY");
  if (!modalOpen) return null;
  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center h-screen w-screen bg-black bg-opacity-50">
      {" "}
      <div className="shadow-xl max-h-[90%] scrollbar-hidden overflow-y-scroll  rounded-lg px-4 w-[680px] h-auto relative bg-white">
        <div className=" flex items-center sticky bg-white z-30 h-full top-0 py-2 w-full mb-2">
          <h1 className=" w-full  text-center font-extrabold text-4xl bg-gradient-to-r from-purple_3 to-gray_2 bg-clip-text text-transparent">
            Exercise Certify
          </h1>
          <RiCloseCircleFill
            className="absolute right-0 top-4 bg-gray-600 rounded-full size-6 cursor-pointer"
            onClick={() => {
              setModalOpen(false);
            }}
          />
        </div>
        <div className="flex  flex-col justify-center items-center mb-4">
          <div className="mt-8 bg-gray-300 w-full rounded-lg h-auto p-6">
            <div className="bg-white shadow-lg rounded-lg px-6 w-full h-10 mb-3 flex items-center justify-between">
              <h1 className="text-lg font-medium text-black">
                Certificate ID:{" "}
                <span className="font-semibold">{data?.certId}</span>
              </h1>
            </div>
            <div className="w-full h-auto bg-white shadow-lg rounded-lg flex items-center justify-between">
              <Image
                src={data?.image}
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
                  Recipient:{" "}
                  <span className="font-semibold">{data?.recipient}</span>
                </p>
              </div>
              <div className="text-black text-md">
                <p>
                  As: <span className="font-semibold">{data?.partOf}</span>
                </p>
              </div>
              <div className="flex flex-col text-black text-md">
                <p>Issued By Execise For Event:</p>
                <p className="font-semibold">{data?.event}</p>
              </div>
              <div className="text-black text-md">
                <p>
                  Date: <span className="font-semibold">{date}</span>
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
                <span className="font-semibold">{data?.recipient}</span> for his
                participation as a{" "}
                <span className="font-semibold">{data?.partOf}</span> in the
                event <span className="font-semibold">{data?.event}</span> on{" "}
                <span className="font-semibold">{date}</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
