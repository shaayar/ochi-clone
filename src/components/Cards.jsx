// import React from 'react'

const Cards = () => {

  const smCard = 'w-1/2 h-[50vh] bg-zinc-900 rounded-2xl flex items-center justify-center border-white border group';
  const bgCard = 'relative w-1/2 h-[50vh] bg-[#004d43] rounded-2xl flex gap-5 items-center justify-center'
  const bgCard2 = 'w-1/2 h-[50vh] rounded-2xl flex gap-5 items-center'

  return (
    <div className='w-full p-14 flex items-center gap-5'>
      <div className={bgCard}>
        <img src="/logo01.svg" alt="" />
        <h1 className="absolute left-5 bottom-5 border-[0.2vw] px-2 py-[.2vh] rounded-full border-[#CDEA68] text-[#CDEA68]">&copy;2019-2022</h1>
      </div>
      <div className={bgCard2}>
        <div className={smCard}>
          <img src="/logo02.svg" className="group-hover:scale-110" alt="" />
        </div>
        <div className={smCard}>
          <img src="/logo03.png" className="rounded-full scale-50 group-hover:scale-75" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cards