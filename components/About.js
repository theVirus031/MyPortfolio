import AboutStyles from '../styles/About.module.css'
import Home1Styles from '../styles/Home1.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image';
import {HiOutlineDownload} from 'react-icons/hi'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const About = () =>{
    return(
        <div id='about'>
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div id={AboutStyles.About}>
            <div className={AboutStyles.block}>
                <div className={AboutStyles.heading}>
                    <h1>01.</h1>
                    <div><h2>About Me</h2><div></div></div>
                </div>
                <div className={AboutStyles.main}>
                    <div className={AboutStyles.content}>
                    I am a passionate Full Stack Developer who loves to explore new technologies and find solutions to new problems.
                        <br/>
                        <br/>
                        When offline, I like to listen to songs, do sketching, nature photography, and play sports like badminton, and football, etc.
                        <br/>
                        <a href='https://drive.google.com/file/d/1SDVPUM9621jG9fYMZX32qtEWNPpwlrfT/view?usp=sharing' id={Home1Styles.getInTouch}>Download CV <HiOutlineDownload/></a>
                    </div>
                    <div className={AboutStyles.photo}>
                        <Image
                            src="/me.png"
                            alt="My Picture"
                            width={200}
                            height={200}
                            quality={100}
                        />
                    </div>
                </div>                
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default About;