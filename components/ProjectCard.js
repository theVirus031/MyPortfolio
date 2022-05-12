import { Card} from "react-bootstrap";
import Image from 'next/image'
import ProjectCardStyles from '../styles/ProjectCard.module.css'
import {CgMediaLive} from 'react-icons/cg'
import {IoLogoGithub} from 'react-icons/io'

const ProjectCard = ({name, content, tech, img}) =>{
    return(
        <Card style={{ width: '23rem', padding: '1.25rem 1rem 0.75rem 1rem',borderRadius: '10px', background: '#072340', color: '#DAE4FB'}} id={ProjectCardStyles.card}>
          <div className={ProjectCardStyles.Links}>
              <a href="#LiveWebsite"><CgMediaLive/> Live</a>
              <a href="#Code"><IoLogoGithub/></a>
          </div>
          <br/>
          <a href="#liveWebsite">
          <Image
              src= {img}
              alt={name}
              width={500}
              height={300}
              quality={50}
            />
            </a>
          <Card.Body style={{ background: '#072340' }}>
            <Card.Title style={{ background: '#072340', fontSize: '1.4rem' }}>{name}</Card.Title>
            <Card.Text style={{ background: '#072340' }}>
              {content}
            </Card.Text>
            <div style={{color: '#7C7DAC',background: '#072340'}}>{tech}</div>
          </Card.Body>
        </Card>
          )
}

export default ProjectCard;