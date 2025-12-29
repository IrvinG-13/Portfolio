import FormC from "../Components/UI/FormC";



export default function Contactame(){
    return(
        <>
        <section id="contactame" className="contactameSection">
            <div className="contactameTitulo">
                <p className="tituloContactame">Hablemos</p>
                <p className="parrafoContactame">¿Tienes un proyecto o una idea? Escríbeme.</p>
                <img className="imgContactame" src="./src/assets/Lets.webp" alt=""></img>
            </div>
            <FormC/>
        </section>
        </>
    )
}