import SkillsStyles from '../styles/Skills.module.css'
import {FaReact,FaSass,FaBootstrap,FaNodeJs,FaPython} from 'react-icons/fa'
import {SiRedux,SiTailwindcss,SiSolidity,SiAdobephotoshop,SiNpm,SiGit,SiVercel,SiGithubactions,SiMaterialui,SiGitlab,SiLinux,SiUbuntu,SiGithub,SiPostman,SiNextdotjs,SiExpress,SiHeroku,SiPhotopea,SiCplusplus,SiTypescript,SiCanva,SiJavascript,SiNetlify,SiMongodb,SiPostgresql,SiGooglecloud,SiFirebase} from 'react-icons/si'
import {ImCss3, ImHtmlFive2} from 'react-icons/im'
import {GrMysql} from 'react-icons/gr'
import {CgFigma} from 'react-icons/cg'
import { motion } from 'framer-motion'
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Skills = () =>{
    return(
        <div id='skills'>
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
        <div id={SkillsStyles.Skills}>
            <div className={SkillsStyles.block}>
                <div className={SkillsStyles.heading}>
                    <h1>02.</h1>
                    <div><h2>My Skills</h2><div></div></div>
                </div>
                <div className={SkillsStyles.Techs}>
                            <div className={SkillsStyles.tooltip}><SiCplusplus/><span className={SkillsStyles.tooltiptext}>C++</span></div>
                            <div className={SkillsStyles.tooltip}><SiJavascript/><span className={SkillsStyles.tooltiptext}>Javascript</span></div>
                            <div className={SkillsStyles.tooltip}><SiTypescript/><span className={SkillsStyles.tooltiptext}>Typescript</span></div>
                            <div className={SkillsStyles.tooltip}><FaPython/><span className={SkillsStyles.tooltiptext}>Python</span></div>
                            <div className={SkillsStyles.tooltip}><FaReact/><span className={SkillsStyles.tooltiptext}>React</span></div>
                            <div className={SkillsStyles.tooltip}><SiRedux/><span className={SkillsStyles.tooltiptext}>Redux</span></div>
                            <div className={SkillsStyles.tooltip}><SiNextdotjs/><span className={SkillsStyles.tooltiptext}>NextJs</span></div>
                            <div className={SkillsStyles.tooltip}><ImHtmlFive2/><span className={SkillsStyles.tooltiptext}>HTML</span></div>
                            <div className={SkillsStyles.tooltip}><ImCss3/><span className={SkillsStyles.tooltiptext}>CSS</span></div>
                            <div className={SkillsStyles.tooltip}><FaSass/><span className={SkillsStyles.tooltiptext}>Sass</span></div>
                            <div className={SkillsStyles.tooltip}><SiTailwindcss/><span className={SkillsStyles.tooltiptext}>Tailwind CSS</span></div>
                            <div className={SkillsStyles.tooltip}><SiMaterialui/><span className={SkillsStyles.tooltiptext}>Material UI</span></div>
                            <div className={SkillsStyles.tooltip}><FaBootstrap/><span className={SkillsStyles.tooltiptext}>Bootstrap</span></div>
                            <div className={SkillsStyles.tooltip}><SiNpm/><span className={SkillsStyles.tooltiptext}>npm</span></div>
                            <div className={SkillsStyles.tooltip}><FaNodeJs/><span className={SkillsStyles.tooltiptext}>NodeJS</span></div>
                            <div className={SkillsStyles.tooltip}><SiExpress/><span className={SkillsStyles.tooltiptext}>Express</span></div>
                            <div className={SkillsStyles.tooltip}><SiMongodb/><span className={SkillsStyles.tooltiptext}>MongoDB</span></div>
                            <div className={SkillsStyles.tooltip}><SiPostgresql/><span className={SkillsStyles.tooltiptext}>PostgreSQL</span></div>
                            <div className={SkillsStyles.tooltip}><GrMysql/><span className={SkillsStyles.tooltiptext}>MySQL</span></div>
                            <div className={SkillsStyles.tooltip}><SiSolidity/><span className={SkillsStyles.tooltiptext}>Solidity</span></div>
                            <div className={SkillsStyles.tooltip}><SiGit/><span className={SkillsStyles.tooltiptext}>Git</span></div>
                            <div className={SkillsStyles.tooltip}><SiGithub/><span className={SkillsStyles.tooltiptext}>GitHub</span></div>
                            <div className={SkillsStyles.tooltip}><SiGithubactions/><span className={SkillsStyles.tooltiptext}>GitHub Actions</span></div>
                            <div className={SkillsStyles.tooltip}><SiGitlab/><span className={SkillsStyles.tooltiptext}>GitLab</span></div>
                            <div className={SkillsStyles.tooltip}><SiGooglecloud/><span className={SkillsStyles.tooltiptext}>Google Cloud Platform</span></div>
                            <div className={SkillsStyles.tooltip}><SiFirebase/><span className={SkillsStyles.tooltiptext}>Firebase</span></div>
                            <div className={SkillsStyles.tooltip}><SiPostman/><span className={SkillsStyles.tooltiptext}>Postman</span></div>
                            <div className={SkillsStyles.tooltip}><SiHeroku/><span className={SkillsStyles.tooltiptext}>Heroku</span></div>
                            <div className={SkillsStyles.tooltip}><SiVercel/><span className={SkillsStyles.tooltiptext}>Vercel</span></div>
                            <div className={SkillsStyles.tooltip}><SiNetlify/><span className={SkillsStyles.tooltiptext}>Netlify</span></div>
                            <div className={SkillsStyles.tooltip}><SiLinux/><span className={SkillsStyles.tooltiptext}>Linux</span></div>
                            <div className={SkillsStyles.tooltip}><SiUbuntu/><span className={SkillsStyles.tooltiptext}>Ubuntu</span></div>
                            <div className={SkillsStyles.tooltip}><SiCanva/><span className={SkillsStyles.tooltiptext}>Canva</span></div>
                            <div className={SkillsStyles.tooltip}><SiAdobephotoshop/><span className={SkillsStyles.tooltiptext}>Photoshop</span></div>
                            <div className={SkillsStyles.tooltip}><SiPhotopea/><span className={SkillsStyles.tooltiptext}>Photopea</span></div>
                            <div className={SkillsStyles.tooltip}><CgFigma/><span className={SkillsStyles.tooltiptext}>Figma</span></div>
                        </div>
                    </div>
                    </div>
                    </motion.div>
                </div>
    )
}

export default Skills;