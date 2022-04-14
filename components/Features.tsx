import React from 'react'
import Image from 'next/image'
import Logo from '../assets/kotlin.png'

const Features = () => {
  const style = {
    wrapper: `mt-[10rem] items-center justify-center`,
    textContainer: `text-center mt-[7rem]`,
    title: `text-[7rem] font-extrabold text-white font-Inter md:text-[3rem]`,
    subtitle: `text-[1.3rem] font-bold text-gray-500 font-Inter`,
  }

  return (
    <>
      <div className={style.textContainer}>
        <div className={style.title}>Features</div>
        <div className={style.subtitle}>
          Pacmc delivers the best Features possible, better then any mod
          manager.
        </div>
      </div>
      <div className={style.wrapper}></div>
    </>
  )
}

export default Features
