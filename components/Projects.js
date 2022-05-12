import ProjectsStyles from '../styles/Projects.module.css'
import ProjectCard from  './ProjectCard'
import { motion } from 'framer-motion'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Projects = () =>{
    return(
        <div id='projects'>
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
                    <h1>03.</h1>
                    <div><h2>My Projects</h2><div></div></div>
                </div>
                <div className={ProjectsStyles.ProjectLists}>
                    <ProjectCard name='MyGrades' img='/joshua-koblin-eqW1MPinEV4-unsplash.jpg' content='acasnooavnoanvonadonvidannvoinadnoineion32nr24noinvdnavndionvai' tech='MERN, Node-RSA'/>
                    <ProjectCard name='Dubify' img='/joshua-koblin-eqW1MPinEV4-unsplash.jpg' content='acasnooavnoanvonadonvidannvoinadnoineion32nr24noinvdnavndionvai' tech='HTML, CSS, JS, NodeJS, Express, ElephanSQL, Firebase'/>
                    <ProjectCard name='Notes-Maker-031' img='/joshua-koblin-eqW1MPinEV4-unsplash.jpg' content='acasnooavnoanvonadonvidannvoinadnoineion32nr24noinvdnavndionvai' tech='MERN, Node-RSA'/>
                    <ProjectCard name='Notes-Maker-031' img='/joshua-koblin-eqW1MPinEV4-unsplash.jpg' content='acasnooavnoanvonadonvidannvoinadnoineion32nr24noinvdnavndionvai' tech='MERN, Node-RSA'/>
                    <ProjectCard name='Notes-Maker-031' img='/joshua-koblin-eqW1MPinEV4-unsplash.jpg' content='acasnooavnoanvonadonvidannvoinadnoineion32nr24noinvdnavndionvai' tech='MERN, Node-RSA'/>
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Projects;