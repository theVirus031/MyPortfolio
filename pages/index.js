import Navv from "../components/Nav"
import Home1 from "../components/Home1"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
      <div>
          <Navv/>
          <Home1 id='Home'/>
          <About id='About'/>
          <Skills id='Skills'/>
          <Projects/>
          <Contact/>
      </div>
  )
}
export default Home