import Nav from '../Components/Layout/Main/Nav';
import '../Css/index.css'
import '../Css/App.css'
import '../Css/Responsive.css'
import SobreMi from './SobreMi';
import Hero from './Hero';
import Tecnologias from './Tecnologias';
import Proyectos from './Proyectos';
import Contactame from './Contactame';
import Footer from '../Components/Layout/Main/Footer';
import { useRef } from 'react';

export default function Home() {
  const contactoRef = useRef(null);
  const proyectosRef = useRef(null);
  
  return (
    <>
      <Nav contactoRef={contactoRef}/>
      <SobreMi proyectosRef={proyectosRef}/>
      <Hero/>
      <Tecnologias/>
      <div ref={proyectosRef}>
        <Proyectos/>
      </div>
      
      <div ref={contactoRef}>
        <Contactame/>
      </div>
      
      <Footer/>
    </>
  );
}

