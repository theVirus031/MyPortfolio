import { Card} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import {FaCalendarAlt} from 'react-icons/fa'
import {BsFillRecordCircleFill} from 'react-icons/bs'

const ExperienceCard = ({position, company, date}) =>{
    return(
        <Card style={{ width: 'auto', padding: '1.25rem 1rem 0.75rem 1rem',borderRadius: '10px', background: '#072340', color: '#DAE4FB'}} id={ProjectCard.style}>
          <Card.Body style={{ background: '#072340' }}>
            <Card.Title style={{ background: '#072340', fontSize: '1.4rem' }}><BsFillRecordCircleFill style={{color: '#00EAFF'}}/> {position}</Card.Title>
            <Card.Text style={{ background: '#072340',color: '#96A2BC', marginLeft: '2.5rem', fontSize: '1.2rem' }}>
              {company}
              <br/>
            <span style={{color: '#7C7DAC',background: '#072340', fontSize: '1rem'}}><FaCalendarAlt/> {date}</span>
            </Card.Text>
          </Card.Body>
        </Card>
          )
}

export default ExperienceCard;