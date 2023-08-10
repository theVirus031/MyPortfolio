import ProjectsStyles from '../styles/Projects.module.css'
import ProjectCard from  './ProjectCard'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Publication = () =>{
    return(
        <div id='publication'>
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div id={ProjectsStyles.Projects}>
            <div className={ProjectsStyles.block}>
                <div className={ProjectsStyles.heading}>
                    <h1>05.</h1>
                    <div><h2>Publication</h2><div></div></div>
                </div>
                <div className={ProjectsStyles.ExpCardsPostion}>
                <a href='https://ieeexplore.ieee.org/document/9997843' rel='noreferrer' target='_blank' style={{textDecoration: "none"}}>
                <ExperienceCard position={'Conference Paper'} date={'2022'} company={'Result Publishing System Using Asymmetric Key Encryption'}/>
                </a>
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Publication;