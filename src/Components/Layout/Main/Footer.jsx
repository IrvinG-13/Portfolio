

export default function Footer({contactoRef}){
    const scrollContacto = () => {
        contactoRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <footer className="footerSection">
            <div className="detailsFooter">
                <p className="tituloFooter">Irvin Gonzalez</p>
                <p className="emailFooter"><i class="fa-regular fa-envelope"></i> irvingonzalez0513@gmail.com</p>
                <p className="phoneFooter"><i class="fa-solid fa-phone"></i> +507 6475-0144</p>
                <div className="footerIcons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>

            <div className="menuFooter">
                <div className="navMenu">
                    <a href="#nav"><i class="bi bi-house"></i> Inicio</a>
                    <a onClick={scrollContacto} href="#hero"><i class="bi bi-person"></i> Sobre Mi</a>
                    <a onClick={scrollContacto} href="#tec"><i class="bi bi-code-slash"></i> Tecnologias</a>
                    <a onClick={scrollContacto} href="#proyectos"><i class="bi bi-folder"></i> Proyectos</a>
                </div>
            </div>
        </footer>
    )
}