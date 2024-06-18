import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import AboutUs from './components/AboutUs'
import GooglyEyes from './components/GooglyEyes'
import Projects from './components/Projects'
import Cards from './components/Cards'
import { Footer } from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <AboutUs />
      <GooglyEyes />
      <Projects />
      <Cards />
      <Footer />
    </div>
  )
}

export default App