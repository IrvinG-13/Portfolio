import Button from "../../UI/Button";
import { useState, useEffect, useCallback } from "react";
import {
  crearProyecto,
  getProyectos,
  eliminarProyecto,
} from "../../../Services/proyectoService";
import {
  getMensajes,
  marcarLeido,
  eliminarMensaje,
} from "../../../Services/contactoService";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const [proyectos, setProyectos] = useState([]);
  const [mensajes, setMensajes] = useState([]);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    tecnologias: "",
    imagenUrl: "",
    repoUrl: "",
    demoUrl: "",
    destacado: false,
  });

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/admin/login"), {replace:true};
  }

  // ===============================
  // CARGAR PROYECTOS
  // ===============================
  const cargarProyectos = useCallback(async () => {
    try {
      const res = await getProyectos();
      setProyectos(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // ===============================
  // CARGAR MENSAJES
  // ===============================
  const cargarMensajes = useCallback(async () => {
  try {
    const res = await getMensajes();
    setMensajes(res.data);
  } catch (err) {
    console.error(err);
  }
}, []);


  useEffect(() => {
  let mounted = true;

  const load = async () => {
    try {
      const [proyRes, msgRes] = await Promise.all([
        getProyectos(),
        getMensajes(),
      ]);

      if (!mounted) return;

      setProyectos(proyRes.data);
      setMensajes(msgRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  load();

  return () => {
    mounted = false;
  };
}, []);


  // ===============================
  // INPUTS
  // ===============================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ===============================
  // CREAR PROYECTO (SOLO FORM)
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearProyecto(form);
      setForm({
        titulo: "",
        descripcion: "",
        tecnologias: "",
        imagenUrl: "",
        repoUrl: "",
        demoUrl: "",
        destacado: false,
      });
      cargarProyectos();
    } catch (err) {
      console.error(err);
      alert("Error al crear el proyecto");
    }
  };

  // ===============================
  // ELIMINAR PROYECTO
  // ===============================
  const handleEliminarProyecto = async (id) => {
    if (!confirm("¿Eliminar proyecto?")) return;
    try {
      await eliminarProyecto(id);
      cargarProyectos();
    } catch (err) {
      console.error(err);
      alert("Error al eliminar el proyecto");
    }
  };

  // ===============================
  // MENSAJES
  // ===============================
  const handleMarcarLeido = async (id) => {
    try {
      await marcarLeido(id);
      cargarMensajes();
    } catch (err) {
      console.error(err);
      alert("Error al marcar como leído");
    }
  };

  const handleEliminarMensaje = async (id) => {
    if (!confirm("¿Eliminar este mensaje?")) return;
    try {
      await eliminarMensaje(id);
      cargarMensajes();
    } catch (err) {
      console.error(err);
      alert("Error al eliminar el mensaje");
    }
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <section className="dashboardSection">
      {/* ================= PROYECTOS ================= */}
      <div className="agregarProyectos">
        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="formDash">
          <h1 className="tituloDash">Agregar Proyecto</h1>

          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            required
          />

          <textarea
            className="textareaDash"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            required
          />

          <input
            name="tecnologias"
            value={form.tecnologias}
            onChange={handleChange}
            placeholder="Tecnologías"
            required
          />

          <input
            name="imagenUrl"
            value={form.imagenUrl}
            onChange={handleChange}
            placeholder="Imagen URL"
            required
          />

          <input
            name="repoUrl"
            value={form.repoUrl}
            onChange={handleChange}
            placeholder="Repo URL"
            required
          />

          <input
            name="demoUrl"
            value={form.demoUrl}
            onChange={handleChange}
            placeholder="Demo URL"
            
          />

          {/* ÚNICO submit */}
          <Button type="submit" className="btnGuardarProyecto">
            Guardar Proyecto
          </Button>
        </form>

        {/* LISTA DE PROYECTOS */}
        <div className="proyectos">
          <h1 className="tituloDash">Proyectos</h1>
          <div className="listaProyectos">
            {proyectos.map((p) => (
              <div key={p.id} className="itemProyecto">
                <strong>{p.titulo}</strong>
                <Button onClick={() => handleEliminarProyecto(p.id)}>
                  Eliminar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MENSAJES ================= */}
      <h1 className="tituloMensaje">Mensajes</h1>

      <div className="listaMensajes">
        {mensajes.length === 0 && <p>No hay mensajes aún</p>}

        {mensajes.map((m) => (
          <div
            key={m.id}
            className={`mensajeItem ${
              m.leido ? "mensajeLeido" : "mensajeNoLeido"
            }`}
          >
            <p>
              <strong>Nombre:</strong> {m.nombre}
            </p>
            <p>
              <strong>Email:</strong> {m.email}
            </p>
            <p>{m.mensaje}</p>

            {!m.leido && (
              <Button onClick={() => handleMarcarLeido(m.id)}>
                Marcar como leído
              </Button>
            )}

            <Button onClick={() => handleEliminarMensaje(m.id)}>
              Eliminar
            </Button>
          </div>
        ))}
        
      </div>
      <Button className="btnLogin" onClick={handleLogout}>Cerrar Sesión</Button>
    </section>
  );
}
