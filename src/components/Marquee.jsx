import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const MarqueeText = ({ children }) => (
  <motion.h1
    initial={{ x: 0 }}
    animate={{ x: "-100%" }}
    transition={{ ease: "linear", repeat: Infinity, duration: 9 }}
    className="text-[25vw] leading-[19vw] flex items-center justify-center -mt-6 pr-[3vw] founders"
  >
    {children}
  </motion.h1>
);

const Marquee = () => {
  const texts = ['WE ARE OCHI', 'WE ARE OCHI', 'WE ARE OCHI']; // Add more texts if needed

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-20 rounded-3xl bg-[#004d43] ">
      <div className="text border-t-2 border-b-2 border-zinc-300 pb-2 flex overflow-hidden whitespace-nowrap">
        {texts.map((text, index) => (
          <MarqueeText key={index}>{text}</MarqueeText>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
