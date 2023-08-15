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
        <div className='navigation'>
            <div className="logo">
                <a href="">muchiri</a>
            </div>
            <div
            onClick={() => setMenu(!menu)}
            className="button">
                <i className="uil uil-bars"></i>
                Menu
            </div>
            <AnimatePresence>
                {menu && <Menu closeMenu={toggleMenu} />}
            </AnimatePresence>
        </div>
    </>
  )
}

export default Header