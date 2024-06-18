import { useEffect, useState } from "react"

const Eye = ({ ghumo }) => (
  <div className="flex items-center justify-center rounded-full bg-zinc-100 w-[15vw] h-[15vw]">
    <div className="relative rounded-full bg-zinc-900 w-2/3 h-2/3">
      <div style={{ transform: `translate(-50%, -50%) rotate(${ghumo}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
        <div className="rounded-full bg-zinc-100 w-10 h-10"></div>
      </div>
    </div>
  </div>
);

const GooglyEyes = () => {
  const [ghumo, setGhumo] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setGhumo(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("/Top-Viewbbcbv-1440x921.jpg")]'>

        <div className="flex gap-20 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <Eye ghumo={ghumo} />
          <Eye ghumo={ghumo} />
        </div>
      </div>
    </div>
  )
}

export default GooglyEyes;
