import React, { useState } from 'react'

import styles from './Header.module.css'

import logo from '../Footer/wacoChamber.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'

export default function Header() {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className={styles.header}>
      <div>
        <div>
          <motion.a whileHover={{color: '#466419'}} href="#"><FontAwesomeIcon icon={faFacebook} className={styles.icon} color="white" /></motion.a>
          <motion.a whileHover={{color: '#466419'}} href="#"><FontAwesomeIcon icon={faTwitter} className={styles.icon} color="white" /></motion.a>
          <motion.a whileHover={{color: '#466419'}} href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} color="white" /></motion.a>
          <motion.a whileHover={{color: '#466419'}} href="#"><FontAwesomeIcon icon={faYoutube} className={styles.icon} color="white" /></motion.a>
        </div>
        <motion.a whileHover={{color: '#466419', backgroundColor: '#ffffff'}} href="#AAA">MEMBER LOGIN</motion.a>
      </div>
      <nav>
        <div>
          <img src={logo} />
        </div>
        <div>
          <div className={styles.regularNav}>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">MEMBERSHIP</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">EVENTS & PROGRAMS</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">PUBLIC POLICY</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">ABOUT</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">NEWS</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#"><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} color="white" /></motion.a>
          </div>
          <div className={styles.mobileNav}>
            {
              menuOpened === false ? <FontAwesomeIcon onClick={ (e) => { setMenuOpened(true) } } icon={faBars} className={styles.icon} /> : <FontAwesomeIcon onClick={ (e) => { setMenuOpened(false) } } icon={faBarsStaggered} className={styles.icon} />
            }
            {
              menuOpened === true ?
              <span>
                            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">MEMBERSHIP</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">EVENTS & PROGRAMS</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">PUBLIC POLICY</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">ABOUT</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#">NEWS</motion.a>
            <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '5px'}} href="#"><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} color="white" /></motion.a>
              </span>
              :
              ''
            }
          </div>
        </div>
      </nav>
    </section>
  )
}
