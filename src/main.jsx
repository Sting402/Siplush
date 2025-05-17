import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import Navbar from './sections/nav'
import Hero from './sections/hero'
import About from './sections/about'
import Feat from './sections/features'
import Bom from './sections/bom'
import JoinBrandsSection from './sections/join'
import CTA2 from './sections/cta2'
import Faq from'./sections/faq'
import Footer from './sections/footer'
import BackToTopButton from './conpounent/btt'
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-122RSFCPYX";

ReactGA.initialize(MEASUREMENT_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
    <Feat/>
    <Bom/>
    <JoinBrandsSection/>
    <Faq/>
    <CTA2/>
    <Footer/>
    <BackToTopButton/>
  </StrictMode>,
)
