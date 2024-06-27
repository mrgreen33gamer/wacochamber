import React from 'react'

import styles from './Footer.module.css'

import img_Logo from './wacoChamber.png'

import img_CommunityBank from './communityBank.png'
import img_TotalPlacement from './totalPlacement.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <section>
        <div className={styles.websiteSponsors}>
          <span />
          <h1>A special thanks to our website sponsors!</h1>
          <div>
            <img src={img_TotalPlacement} />
            <img src={img_CommunityBank} />
          </div>
          <p>"Supporting the Greater Waco Chamber through events, programs and publications capitalizes our Economic Development work."</p>

        </div>

        <div className={styles.contactUs}>

          <form>
            <h1>CONTACT US</h1>
            <div>
              <div>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone" />
              </div>
              <div>
                <textarea placeholder="Message" />
              </div>
            </div>

            <motion.input whileHover={{backgroundColor: "#000000", color: "#ffffff"}} type="submit" value="Submit" />
          </form>

          <div>
          <img src={img_Logo} />
            <div>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faLocation} color="inherit" className={styles.icon} />101 S. 3rd St. Waco, TX 76701</motion.a>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faPhone} color="inherit" className={styles.icon} />254-757-5600</motion.a>
            </div>
            <div>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faFacebook} color="inherit" className={styles.icon} /></motion.a>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faTwitter} color="inherit" className={styles.icon} /></motion.a>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faLinkedin} color="inherit" className={styles.icon} /></motion.a>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faInstagram} color="inherit" className={styles.icon} /></motion.a>
              <motion.a whileHover={{color: "#000000"}} href="#"><FontAwesomeIcon icon={faYoutube} color="inherit" className={styles.icon} /></motion.a>
            </div>
          </div>

        </div>

        <div className={styles.footer}>
          <div>
            <motion.a whileHover={{color: '#466419'}} href="#">MEMBERSHIP</motion.a>
            <motion.a whileHover={{color: '#466419'}} href="#">EVENTS & PROGRAMS</motion.a>
            <motion.a whileHover={{color: '#466419'}} href="#">PUBLIC POLICY</motion.a>
            <motion.a whileHover={{color: '#466419'}} href="#">ABOUT</motion.a>
            <motion.a whileHover={{color: '#466419'}} href="#">NEWS</motion.a>
            <motion.a whileHover={{color: '#466419'}} href="#">ECONOMIC DEVELOPMENT</motion.a>
            <motion.a whileHover={{color: '#466419'}} href="#">INWACO</motion.a>
          </div>
          <div>
            <p>2022 Greater Waco Chamber of Commerce. All Rights Reserved.</p>
          </div>
        </div>

    </section>
  )
}
