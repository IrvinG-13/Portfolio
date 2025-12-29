import Button from "../Components/UI/Button";
import sobreMi from '../assets/sobreMi.jpg';


export default function SobreMi({proyectosRef}){
    const scrollProyectos = () => {
        proyectosRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <section id="sobreMi" className=" section sobreMi">
            <div className="contSobreMi">
                <img className="imgSobreMi" src={sobreMi} alt="sobreMi" />
                <div className="mi">
                    <div>
                        <h2>Irvin Gonzalez</h2>
                        <p>Desarrollador De Software</p>
                        <p>React --  .NET -- SQL Server</p>
                        <p>Construyo aplicaciones web limpias y funcionales</p>
                    </div>
                    <Button onClick={scrollProyectos} className="btnProy"><i class="bi bi-folder-fill"></i> Proyectos</Button>
                </div>
            </div>
        </section>
    )
}