// import React from 'react'
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const cards = [useAnimation(), useAnimation()]
  const handleHover = (index) => {
    cards[index].start({y: "0"})
  };
  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
  };

  const cardContainer = 'w-1/2 h-[70vh] group';
  const imgWrapper = 'wrapper h-[60vh] overflow-hidden rounded-xl flex items-center group-hover:scale-105';
  const txtClasses = 'flex mb-1 items-center gap-3 group-hover:scale-105 group-hover:mb-4';
  const btnWrap = 'px-4 flex gap-5';
  const btnClasses = 'text-sm neue border-[.1vw] border-white font-medium px-[.8vw] py-[.4vw] rounded-full uppercase group-hover:text-black group-hover:bg-zinc-200 group-hover:border-none ';
  const headClasses = 'absolute w-[20vw] text-6xl text-orange-600 neue font-bold top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center z-10 hidden group-hover:block';
  const card = 'p-2 w-full h-full';

  return (
    <div className='relative w-full h-full bg-zinc-800 rounded-3xl'>
      <div className="w-full p-16 border-zinc-600 border-b-[0.3vw]">
        <h1 className="neue text-7xl tracking-tight">Featured projects:</h1>
      </div>
      <div className="cards h-screen w-full flex gap-5 p-10">
        {/* card 1 */}
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className={cardContainer}>
          <div className={card}>
            <div className={txtClasses}>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className="text-sm">FYDE</h1>
            </div>
            <div className={imgWrapper}>
              <img className="scale-100 object-center object-cover " src="/Fyde-663x551.png" alt="image" />
            </div>
          </div>
          {/* buttons */}
          <div className={btnWrap}>
            <button className={btnClasses}>audit</button>
            <button className={btnClasses}>copywriting</button>
            <button className={btnClasses}>sales deck</button>
            <button className={btnClasses}>slides design</button>
          </div>
          {/* heads */}
          <div className={headClasses}>
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
        {/* card 2 */}
        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className={cardContainer}>
          <div className={card}>
            <div className={txtClasses}>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className="text-sm">VISE</h1>
            </div>
            <div className={imgWrapper}>
              <img className="scale-100 object-center object-cover " src="/Vise-663x551.jpg" alt="image" />
            </div>
          </div>
          {/* buttons */}
          <div className={btnWrap}>
            <button className={btnClasses}>agency</button>
            <button className={btnClasses}>company presentation</button>
          </div>
          {/* heads */}
          <div className={headClasses}>
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
        {/* add further cards ... */}
      </div>
    </div>
  )
}

export default Projects