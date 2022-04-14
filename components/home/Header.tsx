import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Logo from '../../assets/kotlin.png'
import { useRouter } from 'next/router'
import { animateScroll as scroll } from 'react-scroll'
import { AiFillGithub } from 'react-icons/ai'

import { FaHome } from 'react-icons/fa'
import { IoMdHelpCircle } from 'react-icons/io'
import { IoMdContact } from 'react-icons/io'
import { AiOutlineDownload } from 'react-icons/ai'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center bg-transparent text-white shadow-md`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-[700] text-[0.9rem] cursor-pointer rounded-3xl transition ease-in-out delay-150 hover:text-indigo-400 duration-300 font-inter text-gray-500`,
  activeNavItem: `text-indigo-400`,
  buttonsContainer: `flex w-1/4 justify-end items-center overflow-hidden`,
  button: `flex items-center transition ease-in-out delay-150 bg-indigo-500 hover:bg-indigo-400 duration-300 rounded-2xl mx-2 text-[1rem] font-semibold cursor-pointer font-inter overflow-hidden sm:hidden`,
  buttonPadding: `p-2 overflow-hidden`,
  gitHubButton: `scale-150 bg-black rounded-xl mx-4 text-white font-inter cursor-pointer overflow-hidden sm:hidden`,
  buttonTextContainer: `h-8 flex items-center overflow-hidden overflow-hidden sm:hidden`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8 overflow-hidden sm:hidden`,
  buttonText: `sm:hidden md:hidden font-inter overflow-hidden`,
  homeIcon: `invisible sm:visible`,
  aboutIcon: `invisible sm:visible`,
  contactIcon: `invisible sm:visible`,
  downloadText: `sm:hidden`,
  navText: `sm:hidden`,
}

const Header = () => {
  const router = useRouter()
  let isAbout = router.pathname === '/about'
  let isHome = router.pathname === '/'
  let isSupport = router.pathname === '/support'
  const [selectedNav, setSelectedNav] = useState(
    `${isHome ? 'home' : ''}${isAbout ? 'about' : ''}${
      isSupport ? 'support' : ''
    }`
  )

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={Logo} width={40} height={40} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <a
            href="/"
            onClick={() => setSelectedNav('home')}
            className={`${style.navItem} ${
              selectedNav === 'home' && style.activeNavItem
            }`}
          >
            <FaHome className={style.homeIcon} />
            <div className={style.navText}>Home</div>
          </a>
          <a
            href="/about"
            onClick={() => setSelectedNav('about')}
            className={`${style.navItem} ${
              selectedNav === 'about' && style.activeNavItem
            }`}
          >
            <IoMdHelpCircle className={style.aboutIcon} />
            <div className={style.navText}>About</div>
          </a>
          <a
            href="/support"
            onClick={() => setSelectedNav('support')}
            className={`${style.navItem} ${
              selectedNav === 'support' && style.activeNavItem
            }`}
          >
            <IoMdContact className={style.contactIcon} />
            <div className={style.navText}>Support</div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <a
          className={`${style.buttonPadding} ${style.gitHubButton}`}
          href="https://github.com/jakobkmar/pacmc"
        >
          <AiFillGithub />
        </a>
        <div
          className={`${style.button} ${style.buttonPadding}`}
          onClick={() => scroll.scrollTo(2000)}
        >
          <AiOutlineDownload />
          <div className={style.downloadText}>Install</div>
        </div>
      </div>
    </div>
  )
}

export default Header
