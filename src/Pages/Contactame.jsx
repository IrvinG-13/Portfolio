import FormC from "../Components/UI/FormC";
import lets from '../assets/Lets.webp'


export default function Contactame(){
    return(
        <>
        <section id="contactame" className="contactameSection">
            <div className="contactameTitulo">
                <p className="tituloContactame">Hablemos</p>
                <p className="parrafoContactame">¿Tienes un proyecto o una idea? Escríbeme.</p>
                <img className="imgContactame" src={lets} alt=""></img>
            </div>
            <FormC/>
        </section>
        </>
    )
}