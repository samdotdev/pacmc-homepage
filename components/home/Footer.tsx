import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className="mt-52 flex h-24 w-full items-center justify-center gap-4 border-t dark:text-white">
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
