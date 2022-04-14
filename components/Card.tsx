import React from 'react'

const style = {
  wrapper: `mt-[12%] mb-[11%] grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 px-[21rem] lg:px-[10px]`,
  card: `h-[20rem] w-[37rem] rounded-2xl shadow-lg bg-[#131212] lg:h-[22rem] lg:w-[22rem] overflow-hidden`,
  cardHeader: `flex flex-wrap w-full h-full justify-center items-center`,
  title: `font-inter font-semibold text-white text-[5rem] lg:text-[5rem]`,
}

const Card = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <p className={style.title}>Easy</p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <p className={style.title}>Secure</p>{' '}
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <p className={style.title}>Simple</p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <p className={style.title}>Fast</p>
        </div>
      </div>
    </div>
  )
}

export default Card
