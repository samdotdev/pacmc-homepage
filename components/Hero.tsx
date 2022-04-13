import React from 'react'

const style = {
  wrapper: `mt-[10%] flex flex-col items-center justify-center sm:flex-row`,
  heroSection: `flex flex-col items-center justify-center max-w-[1200px] mx-auto text-center`,
  title: `text-[6rem] font-extrabold text-black font-Inter sm:text-[3.5rem]`,
  kotlinText: `text-transparent bg-clip-text bg-gradient-to-br from-[#F6891F] via-[#B75EA4] to-[#1AA2D4]`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.heroSection}>
        <div className={style.title}>
          An Easy to use Fabric mod manager fully done in {''}
          <span className={style.kotlinText}>Kotlin.</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
