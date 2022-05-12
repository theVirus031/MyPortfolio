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
                        I am a passionate Full Stack Developer who loves to explore new technologies.
                    
                        <br/>
                        <br/>
                        How to Change Background Color while Highlighting a Text
                        Example of changing the background color with
                        How to Change Text Shadow Color while Selecting a Text
                        <br/>
                        <a href='#CV' id={Home1Styles.getInTouch}>Download CV <HiOutlineDownload/></a>
                    </div>
                    <div className={AboutStyles.photo}>
                        <Image
                            src="/profile_photo1-removebg (2).png"
                            alt="Picture of the author"
                            width={225}
                            height={225}
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