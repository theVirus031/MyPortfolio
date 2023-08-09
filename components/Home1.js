import Home1Styles from '../styles/Home1.module.css'
import {TiArrowRightOutline} from 'react-icons/ti'
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'
import {CgMouse} from 'react-icons/cg'
import Link from 'next/link'
import { motion } from 'framer-motion'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Home1 = () =>{
    return(
        <div id='home'>
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div id={Home1Styles.main}>
            <div className={Home1Styles.block}>
                <h5>Hi, my name is</h5>
                <h1>Vishwas Singh</h1>
                <h3>Full Stack Web Developer</h3>
                <h4>I am currently pursuing my undergraduate degree in Computer Science and Engineering at  <a href='https://www.iiitm.ac.in/index.php/en/'>Indian Institute of Information Technology, Gwalior</a> </h4>
                <Link href='#contact'><a id={Home1Styles.getInTouch}>Get In touch <TiArrowRightOutline/></a></Link>
                <Link href='#about'><a id={Home1Styles.scrollDownButton}><CgMouse/>Scroll Down <HiOutlineChevronDoubleDown/></a></Link>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Home1;