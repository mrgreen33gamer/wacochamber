import React from 'react'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import styles from './Home.module.css'

import img_Link1 from './link_1.png'
import img_Link2 from './link_2.png'
import img_Link3 from './link_3.png'
import img_Link4 from './link_4.png'
import img_Link5 from './link_5.png'

import img_Picture1 from './picture1.jpg'
import img_Picture2 from './picture2.png'
import img_Picture3 from './picture3.jpg'
import img_Picture4 from './picture4.jpg'
import img_Picture5 from './picture5.jpg'

import video_WelcomeVideo from './welcomeVideo.mp4'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'

const imgHover = {
  rest: {
    scale: 1.00,
    opacity: 0.7,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    scale: 1.10,
    opacity: 0.5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const imgHover2 = {
  rest: {
    scale: 1.00,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    scale: 1.10,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

export default function Home() {
  
  return (
    <section>
        <Header />

        <div className={styles.desktopVideo}>
          <video playsInline autoPlay loop muted>
            <source src={video_WelcomeVideo} type="video/mp4" />
            Your browser does not support the 'video' tag.
          </video>
        </div>

        <div className={styles.pictureLinks}>
          <motion.a initial="rest" whileHover="hover" animate="rest" href="#">
            <motion.img variants={imgHover} src={img_Link1} />
            <h1>Economic Development</h1>
          </motion.a>
          <motion.a initial="rest" whileHover="hover" animate="rest" href="#">
            <motion.img variants={imgHover} src={img_Link2} />
            <h1>Workforce & Talent</h1>
          </motion.a>
          <motion.a initial="rest" whileHover="hover" animate="rest" href="#">
            <motion.img variants={imgHover} src={img_Link3} />
            <h1>Programs & Events</h1>
          </motion.a>
          <motion.a initial="rest" whileHover="hover" animate="rest" href="#">
            <motion.img variants={imgHover} src={img_Link4} />
            <h1>Public Policy</h1>
          </motion.a>
          <motion.a initial="rest" whileHover="hover" animate="rest" href="#">
            <motion.img variants={imgHover} src={img_Link5} />
            <h1>Chamber Membership</h1>
          </motion.a>
        </div>

        <div className={styles.photosNewsPress}>
          <div><h1>PHOTOS, NEWS & PRESS RELEASES</h1></div>
          <div>
            <div>
              <div><img src={img_Picture1} /></div>
              <div>
                <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '4px'}} href="#">Business After Hours hosted by Main Event</motion.a>
                <h6>July 12, 2022</h6>
                <p></p>
                <motion.a whileHover={{color: "#ffffff", backgroundColor: '#466419'}} href="#">Read More</motion.a>
              </div>
            </div>

            <div>
              <div><img src={img_Picture2} /></div>
              <div>
                <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '4px'}} href="#">Waco Under 40 Honorees Announced!</motion.a>
                <h6>July 12, 2022</h6>
                <p>The Greater Waco Chamber is proud to announce the 2022 Waco Under 40 Honorees! Dr. Oluwarotimi Adesina, Ascension Providence Trevor Beuerlein, Beuerlein Angus Ranch Krista Brinser, Baylor...</p>
                <motion.a whileHover={{color: "#ffffff", backgroundColor: '#466419'}} href="#">Read More</motion.a>
              </div>
            </div>

            <div>
              <div><img src={img_Picture3} /></div>
              <div>
                <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '4px'}} href="#">TriWaco Awards Ceremony</motion.a>
                <h6>July 12, 2022</h6>
                <p></p>
                <motion.a whileHover={{color: "#ffffff", backgroundColor: '#466419'}} href="#">Read More</motion.a>
              </div>
            </div>

            <div>
              <div><img src={img_Picture4} /></div>
              <div>
                <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '4px'}} href="#">TriWaco Triathlon 2022 sponsored by Bicycle World</motion.
                a>
                <h6>July 12, 2022</h6>
                <p></p>
                <motion.a whileHover={{color: "#ffffff", backgroundColor: '#466419'}} href="#">Read More</motion.a>
              </div>
            </div>

            <div>
              <div><img src={img_Picture5} /></div>
              <div>
                <motion.a whileHover={{textDecoration: 'underline', textUnderlineOffset: '4px'}} href="#">TRC 2022: Reward Session 9 hosted by Ascension Providence</motion.a>
                <h6>July 12, 2022</h6>
                <p></p>
                <motion.a whileHover={{color: "#ffffff", backgroundColor: '#466419'}} href="#">Read More</motion.a>
              </div>
            </div>

          </div>
          <div>
            <motion.a initial="rest" whileHover="hover" animate="rest" variants={{hover: { borderColor: '#000000' }}} href="#"><motion.h1 variants={imgHover2}>CHAMBER NEWS</motion.h1></motion.a>
            <motion.a initial="rest" whileHover="hover" animate="rest" variants={{hover: { borderColor: '#000000' }}} href="#"><motion.h1 variants={imgHover2}>CHAMBER PHOTOS</motion.h1></motion.a>
          </div>
        </div>

        <motion.a whileHover={{backgroundColor: '#000000'}} href="#" className={styles.viewCalenderEvents}>
          <h1><FontAwesomeIcon icon={faCalendarDays} color="white" className={styles.icon} />VIEW OUR CALENDER OF UPCOMING EVENTS<FontAwesomeIcon icon={faCalendarDays} color="white" className={styles.icon} /></h1>
        </motion.a>

        <div className={styles.latestPublications}>
          <div><h1>Latest Publications</h1></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
        </div>

        <div className={styles.bottomMessage}>
          <h1>We're in business for YOUR business and our community!</h1>
        </div>

        <Footer />
    </section>
  )
}
