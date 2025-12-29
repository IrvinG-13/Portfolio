import api from "./api";

export const enviarContacto = (data) => {
  return api.post("/Contacto", data);
};

export const getMensajes = () => {
  return api.get("/Contacto");
};

export const marcarLeido = (id) => {
  return api.put(`/Contacto/${id}/leido`);
};

export const eliminarMensaje = (id) =>
  api.delete(`/Contacto/${id}`);