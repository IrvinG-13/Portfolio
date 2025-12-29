import Button from "../../UI/Button";
import { useState } from "react";

export default function Nav({contactoRef}){
    const [open, setOpen] = useState(false);

    const scrollContacto = () => {
        contactoRef.current?.scrollIntoView({behavior: 'smooth'});
        setOpen(false);
    }
    return(
        <nav id="nav" className="nav">
            <h1>Irvin Gonzalez</h1>

            <div className="navMenu">
                <a href="#nav"><i class="bi bi-house"></i> Inicio</a>
                <a onClick={scrollContacto} href="#hero"><i class="bi bi-person"></i> Sobre Mi</a>
                <a onClick={scrollContacto} href="#tec"><i class="bi bi-code-slash"></i> Tecnologias</a>
                <a onClick={scrollContacto} href="#proyectos"><i class="bi bi-folder"></i> Proyectos</a>
            </div>
            <Button className="navButton" onClick={scrollContacto}><i class="bi bi-envelope-fill"></i> Contactame</Button>

             {/* BOTÓN HAMBURGUESA (MOBILE) */}
            <button
                className="hamburger"
                onClick={() => setOpen(!open)}
                aria-label="Menú"
            >
                <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
            </button>

            {/* NAV MOBILE */}
      <nav className={`mobileNav ${open ? "open" : ""}`}>
        <a href="#nav" onClick={() => setOpen(false)}>
          <i className="bi bi-house"></i> Inicio
        </a>
        <a href="#hero" onClick={() => setOpen(false)}>
          <i className="bi bi-person"></i> Sobre mí
        </a>
        <a href="#tec" onClick={() => setOpen(false)}>
          <i className="bi bi-code-slash"></i> Tecnologías
        </a>
        <a href="#proyectos" onClick={() => setOpen(false)}>
          <i className="bi bi-folder"></i> Proyectos
        </a>

        <Button onClick={scrollContacto}>
          <i className="bi bi-envelope-fill"></i> Contáctame
        </Button>
      </nav>
        </nav>
    )
}