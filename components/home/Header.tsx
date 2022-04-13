import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Logo from '../../assets/kotlin.png'
import { useRouter } from 'next/router'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center bg-transparent text-white shadow-md`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-[700] text-[0.9rem] cursor-pointer rounded-3xl hover:text-indigo-400 font-inter text-gray-500`,
  activeNavItem: `text-indigo-400`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center transition ease-in-out delay-150 bg-indigo-500 hover:bg-indigo-400 duration-300 rounded-2xl mx-2 text-[1rem] font-semibold cursor-pointer font-inter`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonText: `sm:hidden md:hidden font-inter`,
  navText: ``,
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
            <div className={style.navText}>Home</div>
          </a>
          <a
            href="/about"
            onClick={() => setSelectedNav('about')}
            className={`${style.navItem} ${
              selectedNav === 'about' && style.activeNavItem
            }`}
          >
            <div className={style.navText}>About</div>
          </a>
          <a
            href="/support"
            onClick={() => setSelectedNav('support')}
            className={`${style.navItem} ${
              selectedNav === 'support' && style.activeNavItem
            }`}
          >
            <div className={style.navText}>Support</div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div
          className={`${style.button} ${style.buttonPadding}`}
          onClick={() => scroll.scrollTo(2000)}
        >
          <div className={style.buttonTextContainer}>Install</div>
        </div>
      </div>
    </div>
  )
}

export default Header
