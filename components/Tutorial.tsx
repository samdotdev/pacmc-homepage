import React from 'react'
import Terminal from './Terminal'

const style = {
  wrapper: 'flex flex-col items-center justify-center mt-[10rem]',
  installationSection: `mt-[1rem] items-center justify-center`,
  titleContainer: `mt-[7%] flex flex-col items-center justify-center sm:flex-row`,
  title: `text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#F6891F] via-[#B75EA4] to-[#1AA2D4] font-Inter md:text-[3rem]`,
  subtitle: `text-[1.3rem] font-bold text-gray-500 font-Inter md:hidden`,
}

const installation = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleContainer}>
        <div className={style.title}>Installation</div>
        <div className={style.subtitle}>
          Just open up your terminal and type those commands depending on your
          OS. ✨
        </div>
      </div>
      <div className={style.installationSection}>
        <Terminal />
      </div>
    </div>
  )
}

export default installation
