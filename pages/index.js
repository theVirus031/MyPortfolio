import Navv from "../components/Nav"
import Home1 from "../components/Home1"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Head from 'next/head'
import Mask from "../components/Mask"
import Experience from "../components/Experience"


const Home = () => {
  return (
      <div>
          <Head>
            <title>Vishwas031</title>
            <link rel="icon" href="/logo.jpg" />
          </Head>
          <Navv/>
          <Mask/>
          <Home1 id='Home'/>
          <About id='About'/>
          <Skills id='Skills'/>
          <Experience/>
          <Projects/>
          <Contact/>
      </div>
  )
}
export default Home