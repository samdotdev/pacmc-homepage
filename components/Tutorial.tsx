import React from 'react'
import Terminal from './Terminal'

const style = {
  wrapper:
    'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 px-[21rem] lg:px-[10px]',
  installationSection: `mt-[4rem] items-center justify-center`,
  titleContainer: `mt-[7%] flex flex-col items-center justify-center sm:flex-row`,
  title: `text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#F6891F] via-[#B75EA4] to-[#1AA2D4] font-Inter`,
  subtitle: `text-[1rem] font-bold text-gray-500 font-Inter`,
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
