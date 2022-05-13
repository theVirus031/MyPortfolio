import { Navbar, Container, Nav} from "react-bootstrap";
import NavStyles from '../styles/Nav.module.css'
import Link from "next/link";

const Navv = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" style={{zIndex:1}} id={NavStyles.bgColor} >
            <Container>
                <Navbar.Brand href="#" id={NavStyles.logoo}>Vs<span>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav id={NavStyles.navv}>
                    <Link href="#about"><a>About<span></span></a></Link>
                    <Link href="#skills"><a>Skills<span></span></a></Link>
                    <Link href="#projects"><a>Projects<span></span></a></Link>
                    <Link href="#contact" ><a>Contact<span></span></a></Link>
                    <span><a href="/Vishwas_Singh_Resume.pdf" download>Resume</a></span>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navv;