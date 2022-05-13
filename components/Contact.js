import ContactStyles from '../styles/Contact.module.css'
import {SiGithub,SiLinkedin,SiGmail,SiInstagram,SiTwitter} from 'react-icons/si'
import { motion } from 'framer-motion'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Contact = () =>{
    return(
    <div id='contact'>
    <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div id={ContactStyles.Contact}>
            <div className={ContactStyles.block}>
                    <div className={ContactStyles.heading}>

                        {/* temporary */}
                        <h1>04.</h1>
                        <div><h2>Contact Me</h2><div></div></div>
                    </div>
                    <ul className={ContactStyles.handles}>
                        <li className={ContactStyles.icon}><a href="https://www.linkedin.com/in/vishwas-singh-3623881b7/"><SiLinkedin/></a></li>
                        <li className={ContactStyles.icon}><a href="https://github.com/vishwas031"><SiGithub/></a></li>
                        <li className={ContactStyles.icon}><a href = "mailto: pvt031vishwas@gmail.com"><SiGmail/></a></li>
                        <li className={ContactStyles.icon}><a href="https://twitter.com/the_vishwas031"><SiTwitter/></a></li>
                        <li className={ContactStyles.icon}><a href="https://www.instagram.com/the_vishwas031/"><SiInstagram/></a></li>
                    </ul>
            </div>
        </div>
        </motion.div>
    </div>
    )
}

export default Contact;