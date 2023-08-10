import ProjectsStyles from '../styles/Projects.module.css'
import ProjectCard from  './ProjectCard'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Experience = () =>{
    return(
        <div id='experience'>
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
                    <h1>04.</h1>
                    <div><h2>Experience</h2><div></div></div>
                </div>
                <div className={ProjectsStyles.ExpCardsPostion}>
                <ExperienceCard position={'Full-stack Developer'} date={'dec 2022'} company={'Freelance work'}/>
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Experience;