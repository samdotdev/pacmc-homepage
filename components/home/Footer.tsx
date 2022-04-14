import React from 'react'
import Logo from '../../assets/kotlin.png'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="mt-52 flex h-24 w-full items-center justify-center gap-4 border-t ">
        <a href="https://github.com/jakobkmar/pacmc">
          <AiFillGithub />
        </a>
        <a href="https://discord.gg/Xuc4aSVtUV">
          <FaDiscord />
        </a>
        <br />
        <p>pacmc©</p>
      </footer>
    </div>
  )
}

export default Footer
