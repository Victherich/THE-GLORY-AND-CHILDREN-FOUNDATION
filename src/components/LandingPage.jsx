import React from 'react'
import Hero from './Hero'
import AboutComponent from './AboutComponent'
import Impact from './Imapact'
import Programs from './Programs'
import GetInvolved from './GetInvolved'
import Testimonials from './Testimonials'
import News from './News'
import FAQ from './Faq'
import Hero2 from './Hero2'
import AboutUsBrief from './AboutUsBriefComponent'
import { useEffect , useState} from 'react'
import { useLocation } from 'react-router-dom'
import Events from './Events'
import PartnersSection from './PartnersSection'
import InstitutionHighlight from './InstitutionHighlight'

const LandingPage = () => {
  const location = useLocation();

  const [reRender, setRerender] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setRerender(false);
    }, 300);

    const id2 = setTimeout(() => {
      setRerender(true);
    }, 600);

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, [location.pathname]);






  return (
    reRender&&<div>
      <Hero/>
      <AboutUsBrief/>
    
          
      {/* <AboutComponent/> */}
      <Impact/>
      <Events/>
      <Programs/>
      <GetInvolved/>
      
      <Hero2/>
      <Testimonials/>
      <PartnersSection/>
      <InstitutionHighlight/>
      {/* <News/> */}
      {/* <FAQ/> */}
    </div>
  )
}

export default LandingPage
