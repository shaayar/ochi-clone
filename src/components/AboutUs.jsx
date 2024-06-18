// import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="w-full text-[#0c0c0c] bg-[#CDEA68] p-10 rounded-tr-3xl rounded-tl-3xl -mt-2 z-20">
      <h1 className="text-5xl py-10 font-normal neue">Ochi is a strategic partner for fast-growing tech businesses that need to <span className="underline decoration-[#0c0c0c]">raise funds</span>,<span className="underline decoration-[#0c0c0c]">sell products</span>, <span className="underline decoration-[#0c0c0ce3]">explain complex ideas</span>, and <span className="underline decoration-[#0c0c0c]">hire great people.</span></h1>
      {/* what to expect */}
      <div className="border-t-2 border-zinc-700 border-b-2 flex py-3">
        <div className="w-1/2"><h5>What can you expect:</h5></div>
        <div className="w-1/2">
          <div className="w-1/2 flex flex-col gap-4">
            <p>We create tailored presentations to help you persuade your collegues, clients or investors. Whether its live or digital, delivered for one or hundred people.</p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing and captivating.</p>
          </div>
        </div>
      </div>
      {/* Our approach */}
      <div className="flex py-4">
        <div className="w-1/2 p-2">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="text-white bg-[#212121] hover:bg-[#0c0c0c] rounded-full flex gap-2 items-center p-2 text-md font-semibold mt-5">
            READ MORE
            <div className="btn rotate-45 bg-white flex items-center justify-center hover:w-[2vw] hover:h-[2vw] rounded-full hover:text-black "> <FaArrowUpLong /></div>
          </button>
        </div>
        <div className="w-1/2 p-2">
          <img src="/about-us.jpg" alt="about us" className="rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs