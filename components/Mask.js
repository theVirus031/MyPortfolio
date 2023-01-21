import MaskStyles from '../styles/Mask.module.css'
import { motion } from 'framer-motion'
// import {SiInstagram} from 'react-icons/si'
import {FiLinkedin,FiGithub,FiTwitter} from 'react-icons/fi'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Mask = ()=>{
    return(
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div id={MaskStyles.Mask}>
        
            <div className={MaskStyles.left}>
                    <ul className={MaskStyles.handles}>
                        <li className={MaskStyles.icon}><a href="https://www.linkedin.com/in/vishwas-singh-3623881b7/"><FiLinkedin/></a></li>
                        <li className={MaskStyles.icon}><a href="https://github.com/vishwas031"><FiGithub/></a></li>
                        <li className={MaskStyles.icon}><a href="https://twitter.com/the_vishwas031"><FiTwitter/></a></li>
                        {/* <li className={MaskStyles.con}><a href="https://www.instagram.com/the_virus031/"><SiInstagram/></a></li> */}
                    </ul>
                    <div></div>
            </div>
            <div className={MaskStyles.right}>
                <a href = "mailto: pvt031vishwas@gmail.com">pvt031vishwas@gmail.com</a>
                <div></div>
            </div>

        </div>
        </motion.div>
    )
}

export default Mask;