import Button from "../Components/UI/Button";
import {useEffect, useState} from "react";
import { getProyectos} from "../Services/proyectoService";

export default function Proyectos(){

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        getProyectos()
        .then((res) => setProyectos(res.data))
        .catch((err) => console.error(err));
    },[])

 return (
    <section id="proyectos" className="proyectos">
      <p className="tituloPro">Proyectos</p>

      <div className="gridProyectos">
        {proyectos.map(proyecto => (
          <div className="card" key={proyecto.id}>
            <img
              className="imgPro"
              src={proyecto.imagenUrl}
              alt={proyecto.titulo}
            />

            <p className="cardTitulo">{proyecto.titulo}</p>
            <p className="cardParrafo">{proyecto.descripcion}</p>

            <div>
              {proyecto.repoUrl && (
                <Button className="btnGit">
                  <a href={proyecto.repoUrl} target="_blank">
                    <i className="fa-brands fa-github"></i> View Code
                  </a>
                </Button>
              )}

              {proyecto.demoUrl && (
                <Button className="btnLive">
                  <a href={proyecto.demoUrl} target="_blank">
                    <i className="fa-solid fa-eye"></i> Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}