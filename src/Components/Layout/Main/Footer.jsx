

export default function Footer({contactoRef}){
    const scrollContacto = () => {
        contactoRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <footer className="footerSection">
            <div className="detailsFooter">
                <p className="tituloFooter">Irvin Gonzalez</p>
                <p className="emailFooter"><i className="fa-regular fa-envelope"></i> irvingonzalez0513@gmail.com</p>
                <p className="phoneFooter"><i className="fa-solid fa-phone"></i> +507 6475-0144</p>
                <div className="footerIcons">
                    <a target="blank" href="https://www.instagram.com/irving_0513/"><i className="fa-brands fa-instagram"></i></a>
                    <a target="blank" href="https://www.linkedin.com/in/irvin-gonz%C3%A1lez13/"><i className="fa-brands fa-linkedin"></i></a>
                    <a target="blank" href="https://github.com/IrvinG-13"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>

            <div className="menuFooter">
                <div className="navMenu">
                    <a href="#nav"><i class="bi bi-house"></i> Inicio</a>
                    <a onClick={scrollContacto} href="#hero"><i className="bi bi-person"></i> Sobre Mi</a>
                    <a onClick={scrollContacto} href="#tec"><i className="bi bi-code-slash"></i> Tecnologias</a>
                    <a onClick={scrollContacto} href="#proyectos"><i className="bi bi-folder"></i> Proyectos</a>
                </div>
            </div>
        </footer>
    )
}