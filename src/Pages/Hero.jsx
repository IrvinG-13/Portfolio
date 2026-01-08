import fotoPerfil from '../assets/fotoPerfil.jpeg';

export default function Hero(){
    return(
        <>
        <section id="hero" className="hero">
            <div className="bg"></div>
            <div className="details">
                <p className="tituloHero">Sobre Mi</p>
                <p>Desarrollador de software enfocado en aplicaciones web modernas.
                   Trabajo con React en el frontend y ASP.NET Core en el backend, creando proyectos funcionales, escalables y bien estructurados.
                    Me gusta aprender, mejorar mis habilidades y construir soluciones reales.</p>
            </div>
            <div className="fotoPerfil">
                <img className="perfil" src={fotoPerfil} alt=""></img>
            </div>
            
        </section>
        </>
    )
}