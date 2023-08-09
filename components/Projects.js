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
                    <h1>04.</h1>
                    <div><h2>My Projects</h2><div></div></div>
                </div>
                <div className={ProjectsStyles.ProjectLists}>
                    <ProjectCard name='MyGrades' img='/MyGrades.png' content='A MERN Result Checking Website to Check Results in a Highly Secured Environment. Asymmetric Ecryption is used. The result is encrypted using the public key of the user and can only be accessed through his/her private key.' CodeLink='https://github.com/vishwas031/my-grades-backend' liveWebsite='https://github.com/vishwas031/my-grades-backend' tech='MongoDB, Express, NodeJs, ReactJs, Node-RSA, Bcrypt, Solidity'/>
                    <ProjectCard name='SocialSphere' img='/SocialSphere.png' content='Designed and developed a feature-rich social media platform incorporating real-time chat functionality, follow/unfollow interactions, seamless people search, post creation and liking capabilities.' CodeLink='https://github.com/vishwas031/social-sphere-backend' liveWebsite='https://github.com/vishwas031/social-sphere-backend' tech='MongoDB, Express, NodeJs, ReactJs, Redux, Socket.io'/>
                    <ProjectCard name='ShopSavvy' img='/ShopSavvy.png' content='An E-Commerce platform featuring buyer and seller interfaces. Buyers can add to cart and complete dummy payment. Sellers manage categories, products, stock via CRUD operations. Ensured responsive design, user authentication, and smooth state management.' CodeLink='https://github.com/vishwas031/shopSavvy-backend' liveWebsite='https://github.com/vishwas031/shopSavvy-backend' tech='MongoDB, Express, NodeJs, ReactJs, Redux, Socket.io'/>
                    {/* <ProjectCard name='Dubify' img='/Dubify.png' content='An Instagram clone. It has features like Follow/Unfollow, Posts, Like, Comment, Repost (share), Light/Dark theme, Stories (1-day validity), Edit profile, Search User, Delete Posts.' CodeLink='https://github.com/vishwas031/chatting-website-frontend' liveWebsite='https://webkirti-social-media-website.netlify.app/' tech='NodeJS, Express, PostgreSQL, JWT tokens, Firebase'/> */}
                    {/* <ProjectCard name='Notes-Taker' img='/NotesMaker.png' content='Developed a user-friendly website enabling note management. Users can securely Login/Signup, create, edit, delete, and save notes to their accounts. Prioritized seamless user experience and data security throughout the platform.' CodeLink='https://github.com/vishwas031/Note-Making-Website' liveWebsite='https://github.com/vishwas031/Note-Making-Website' tech='HTML, CSS, JavaScript, Bcrypt, JWT Token'/> */}
                    <ProjectCard name='Placement Management System' img='/PlacementManagement.png' content='Designed an object-oriented project focused on overseeing college placement statistics. Simplifies data comparison across multiple colleges, providing consolidated insights in a user-friendly interface.' CodeLink='https://github.com/vishwas031/Placement-Management-System' tech='C++, OOPS'/>
                    {/* <ProjectCard name='Portfolio' img='/Portfolio.png' content='Personal portfolio website. Created using NextJS and hosted on Vercel.' CodeLink='https://github.com/vishwas031/my-portfolio' liveWebsite='https://vishwas031.vercel.app/' tech='ReactJS, NextJS, framer-motion, Javascript, bootstrap, Vercel'/> */}
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    )
}

export default Projects;