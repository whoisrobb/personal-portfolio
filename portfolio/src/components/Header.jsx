import React, { useState } from 'react'
import Menu from '../pages/Menu'
import { AnimatePresence } from 'framer-motion'

const Header = () => {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

  return (
    <>
        <a className='logo' href="">muchiri</a>
        <div
        onClick={() => setMenu(!menu)}
        className="menu-button">
            <i className="uil uil-bars"></i>
            Menu
        </div>
        <AnimatePresence>
            {menu && <Menu closeMenu={toggleMenu} />}
        </AnimatePresence>
    </>
  )
}

export default Header