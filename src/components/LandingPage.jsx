// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from "react-icons/io";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-speed="-.3" className='bg-zinc-900 w-full min-h-screen pt-1'>
      <div className="txtstr mt-[8.3rem] px-5">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return <div className="masker" key={index}>
            <div className="w-fit flex items-center  overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                  className='mr-2 pt-2 overflow-hidden relative'
                >
                  <img src='/home-page-txt.jpg' alt='Description' className='h-[5vw] rounded-md object-cover object-center' />
                </motion.div>
              )}
              <h1 className="uppercase text-[8vw] founders leading-[6vw] font-bold">{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className="border-zinc-600 border-t-2 mt-[9.5rem] flex justify-between py-4 px-4">

        {["For the public and private companies", "From the first pitch to the IPO"].map((item, index) => (<p className='text-md font-light tracking-tight leading-none' key={index}>{item}</p>))}

        <div className="start flex gap-1 items-center ">
          <div className='.hvr -mt-1 px-5 py-1 border-2 rounded-full border-zinc-600 font-light text-sm uppercase'>start the project</div>

          <div className=".hvr -mt-1 border-2 border-zinc-600 w-5 flex items-center justify-center rounded-full px-4 py-2 cursor-pointer">
            <span className="-rotate-45 font-bold">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage