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
                    <ProjectCard name='MyGrades' img='/MyGrades.png' content='A MERN Result Checking Website to Check Results in a Highly Secured Environment. Asymmetric Ecryption is used. The result is encrypted using the public key of the user and can only be accessed through his/her private key.' CodeLink='https://github.com/vishwas031/my-grades' tech='MERN, Node-RSA, Bcrypt, Google Cloud Platform'/>
                    <ProjectCard name='Dubify' img='/Dubify.png' content='An Instagram clone. It has features like Follow/Unfollow, Posts, Like, Comment, Repost (share), Light/Dark theme, Stories (1-day validity), Edit profile, Search User, Delete Posts.' CodeLink='https://github.com/vishwas031/chatting-website-frontend' liveWebsite='https://webkirti-social-media-website.netlify.app/' tech='NodeJS, Express, PostgreSQL, JWT tokens, Firebase'/>
                    <ProjectCard name='Notes-Taker' img='/NotesMaker.png' content='A Website to Store and Manage Your Notes. Users can Login/Signup and create, delete, edit, or save their notes to their account.' CodeLink='https://github.com/vishwas031/Note-Making-Website' liveWebsite='https://notes-maker-031.netlify.app/' tech='HTML, CSS, JS, Bcrypt, JWT Token'/>
                    <ProjectCard name='Placement Management System' img='/PlacementManagement.png' content='An OOPS-based project aims at managing the placement statistics of a college. It allows you to compare statistics from various colleges in one place.' CodeLink='https://github.com/vishwas031/Placement-Management-System' tech='C++, OOPS'/>
                    <ProjectCard name='Portfolio' img='/Portfolio.png' content='Personal portfolio website. Created using NextJS and hosted on Vercel.' CodeLink='https://github.com/vishwas031/my-portfolio' liveWebsite='https://vishwas031.vercel.app/' tech='ReactJS, NextJS, framer-motion, Javascript, bootstrap, Vercel'/>
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Projects;