import React, { useState } from 'react'

const style = {
  wrapper: 'flex flex-wrap items-center justify-center',
  terminal: `flex flex-wrap justify-center m-6`,
  terminalWindow: `w-[25rem] inverse-toggle h-[15rem] px-5 shadow-2xl text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden`,
  terminalButtons: `mb-2 flex`,
  closeButton: `h-3 w-3 bg-red-500 rounded-full`,
  minimizeButton: `ml-2 h-3 w-3 bg-yellow-400 rounded-full`,
  openButton: `ml-2 h-3 w-3 bg-green-500 rounded-full`,
  textSection: `mt-4 flex`,
  codeSnippet: `text-green-400`,
  command: `flex-1 items-center pl-2`,
  osButton: `text-green-500`,
  activeOSItem: `bg-green-700`,
}

const Terminal = () => {
  const [selectedOS, setSelectedOS] = useState('Windows')
  let isMacOS = selectedOS === 'macOS'
  let isWindows = selectedOS === 'Windows'
  let isLinux = selectedOS === 'Linux'

  return (
    <div className={style.wrapper}>
      <div className={style.terminal}>
        <div className={style.terminalWindow}>
          <div className={style.terminalButtons}>
            <div className={style.closeButton}></div>
            <div className={style.minimizeButton}></div>
            <div className={style.openButton}></div>
          </div>
          <div className={style.osButton}>
            <button
              onClick={() => setSelectedOS('Linux')}
              className={`${selectedOS === 'Linux' && style.activeOSItem}`}
            >
              [ Linux ]
            </button>
            <button
              onClick={() => setSelectedOS('Windows')}
              className={`${selectedOS === 'Windows' && style.activeOSItem}`}
            >
              [ Windows ]
            </button>
            <button
              onClick={() => setSelectedOS('macOS')}
              className={`${selectedOS === 'macOS' && style.activeOSItem}`}
            >
              [ macOS ]
            </button>
          </div>
          <div className={style.textSection}>
            <span className={style.codeSnippet}>computer:~$</span>
            <p className={style.command}>
              {isLinux ? 'flatpak install net.axay.pacmc' : ''}
              {isMacOS ? 'brew install pacmc' : ''}
              {isWindows ? 'scoop install pacmc' : ''}
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal
