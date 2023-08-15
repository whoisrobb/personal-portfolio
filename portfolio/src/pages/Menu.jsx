import React from 'react'
import handleEmailClick from '../utils/email'
import { motion } from 'framer-motion'

const tabs = ['home', 'about', 'portfolio', 'contact']

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
}

const menuVars = {
    initial: { scaleY: 0 },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0]
        }
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
        }
    }
}

const leftVars = {
    initial: {
        y: '30vh',
        transition: {
            duration: 0.5
        }
    }, 
    open: {
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.4,
            staggerChildren: 0.4
        }
    },
    exit: {
        y: '30vh',
        transition: {
            duration: 0.5
        }
    }
}

const rightVars = {
    initial: {
        y: '30vh',
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }, 
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.4,
            staggerChildren: 0.4
        }
    },
    exit: {
        y: '30vh',
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }
}


const Menu = ({ closeMenu }) => {

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId)
        closeMenu()
    }

  return (
    <motion.section
    variants={menuVars}
    initial='initial'
    animate='animate'
    exit='exit'
    className='menu'>
        <div
        className="left">
                {tabs.map((tab) => (
                    <div className="tabs">
                        <motion.div                   
                        variants={leftVars}
                        initial='initial'
                        animate='open'
                        exit='exit'>
                            <a key={tab} onClick={() => handleNavClick(tab)}>{tab}</a>
                        </motion.div>
                    </div>
                    
                ))}
        </div>
        <motion.div
        className="right">
            <div className="tabs">
                <motion.div
                variants={rightVars}
                initial='initial'
                animate='open'
                exit='exit'>
                <h2>Get in touch</h2>
                <h4 onClick={handleEmailClick}>developedbyrobbie@gmail.com</h4>
                <ul>
                    <a href=""><li><i className="uil uil-github-alt"></i></li></a>
                    <a href=""><li><i className="uil uil-instagram"></i></li></a>
                    <a href=""><li><i className="uil uil-twitter-alt"></i></li></a>
                    <a href=""><li><i className="uil uil-linkedin-alt"></i></li></a>
                </ul>
                </motion.div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Menu