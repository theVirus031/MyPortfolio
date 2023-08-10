import { Navbar, Container, Nav} from "react-bootstrap";
import {AiOutlineBars} from 'react-icons/ai'
import NavStyles from '../styles/Nav.module.css'
import Link from "next/link";

const Navv = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" style={{zIndex:100}} id={NavStyles.bgColor} >
            <Container>
                <Navbar.Brand href="#" id={NavStyles.logoo}>Vs<span>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navIcon"><AiOutlineBars  color="#DAE4FB"/></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav id={NavStyles.navv}>
                    <Link href="#about"><a>About<span></span></a></Link>
                    <Link href="#skills"><a>Skills<span></span></a></Link>
                    <Link href="#projects"><a>Projects<span></span></a></Link>
                    <Link href="#experience" ><a>Experience<span></span></a></Link>
                    <Link href="#publication" ><a>Publications<span></span></a></Link>
                    <Link href="#contact" ><a>Contact<span></span></a></Link>
                    <span><a href="https://drive.google.com/file/d/17y1D7TumehiPC5BjSsZfGtFVX1Lx-nkM/view?usp=sharing" download>Resume</a></span>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navv;