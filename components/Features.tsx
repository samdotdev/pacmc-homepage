import React from 'react'
import Image from 'next/image'
import Logo from '../assets/kotlin.png'
import GUI from '../assets/gui.png'

const Features = () => {
  const style = {
    wrapper: `mt-[5rem] items-center justify-center`,
    textContainer: `text-center mt-[7rem]`,
    title: `text-[7rem] font-extrabold text-white font-Inter md:text-[3rem]`,
    subtitle: `text-[1.3rem] font-bold text-gray-500 font-Inter`,
    card: `flex flex-col items-center justify-center mt-[5rem]`,
    cardContent: `flex flex-wrap items-center justify-center`,
    cardText: `flex flex-col pl-[5rem] pr-[5rem]`,
    cardTitle: `text-white text-[2rem] font-bold font-Inter`,
    cardSubTitle: `text-gray-500 text-[1em] font-bold font-Inter`,
    cardMedia: `rounded-xl shadow-2xl`,
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
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.cardContent}>
            <div className={style.cardText}>
              <div className={style.cardTitle}>GUI</div>
              <div className={style.cardSubTitle}>
                Pacmc offers a powerfull GUI to <br></br> uninstall, install &
                manage <br></br> your Fabric mods, <br></br>all in one Project.
              </div>
            </div>
            <div className={style.cardMedia}>
              <Image src={GUI} width={500} height={400} />
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardContent}>
            <div className={style.cardMedia}>
              <Image src={GUI} width={500} height={400} />
            </div>
            <div className={style.cardText}>
              <div className={style.cardTitle}>GUI</div>
              <div className={style.cardSubTitle}>
                Pacmc offers a powerfull GUI to <br></br> uninstall, install &
                manage <br></br> your Fabric mods, <br></br>all in one Project.
              </div>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardContent}>
            <div className={style.cardText}>
              <div className={style.cardTitle}>GUI</div>
              <div className={style.cardSubTitle}>
                Pacmc offers a powerfull GUI to <br></br> uninstall, install &
                manage <br></br> your Fabric mods, <br></br>all in one Project.
              </div>
            </div>
            <div className={style.cardMedia}>
              <Image src={GUI} width={500} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
