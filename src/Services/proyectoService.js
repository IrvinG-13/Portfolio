import api from "./api";

export const getProyectos = () =>
  api.get("/Proyectos");

export const getDestacados = () =>
  api.get("/Proyectos/destacados");

export const crearProyecto = (data) =>
  api.post("/Proyectos", data);

export const actualizarProyecto = (id, data) =>
  api.put(`/Proyectos/${id}`, data);

export const eliminarProyecto = (id) =>
  api.delete(`/Proyectos/${id}`);
