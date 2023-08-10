import ContactStyles from '../styles/Contact.module.css'
import Home1Styles from '../styles/Home1.module.css'
import {SiGithub,SiLinkedin,SiGmail,SiInstagram,SiTwitter} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Contact = () =>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_icrfppe', 'template_p0k8czv', form.current, 'c6r14twRQd7bOoudV')
     
    e.target.reset()
  };
  
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
                        <h1>05.</h1>
                        <div><h2>Contact Me</h2><div></div></div>
                    </div>
                    <br/>
                    <br/>
                    <form ref={form} onSubmit={sendEmail} id='form'>
                        <input type="text" name='name' placeholder='Your Full Name' required className={ContactStyles.form_input}/>
                        <br/>
                        <br/>
                        <input type="email" name='email' placeholder='Your Email' required className={ContactStyles.form_input}/>
                        <br/>
                        <br/>
                        <textarea name='message' rows="7" placeholder='Your Message' required className={ContactStyles.form_textarea}></textarea>
                        <button type='submit' id={Home1Styles.getInTouch}>Send Message</button>
                    </form>
                    <ul className={ContactStyles.handles}>
                        <li className={ContactStyles.icon}><a href="https://www.linkedin.com/in/vishwas-singh-3623881b7/"><SiLinkedin/></a></li>
                        <li className={ContactStyles.icon}><a href="https://github.com/vishwas031"><SiGithub/></a></li>
                        <li className={ContactStyles.icon}><a href = "mailto: pvt031vishwas@gmail.com"><SiGmail/></a></li>
                        <li className={ContactStyles.icon}><a href="https://twitter.com/the_vishwas031"><SiTwitter/></a></li>
                        <li className={ContactStyles.icon}><a href="https://www.instagram.com/the_virus031/"><SiInstagram/></a></li>
                    </ul>
            </div>
        </div>
        </motion.div>
    </div>
    )
}

export default Contact;