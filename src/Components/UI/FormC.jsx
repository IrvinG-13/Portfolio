import Button from "./Button";
import { useState } from "react";
import {enviarContacto} from "../../Services/contactoService";


export default function FormC(){
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [modal, setModal] = useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev)=> ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await enviarContacto(form);
        setModal(true)
        setForm({
            nombre: "",
            email: "",
            mensaje: "",
        });
        } catch (err) {
        console.error(err);
        alert("Error al enviar el mensaje");
        }
    };
    return(
        <>
            <form onSubmit={handleSubmit} className="formContactame" action="">
                <input name="nombre" value={form.nombre} className="input" onChange={handleChange} required placeholder="Name..." type="text" />
                <input name="email" value={form.email} className="input" onChange={handleChange} required  placeholder="Email..." type="email" />
                <textarea name="mensaje" value={form.mensaje} className="input textarea" onChange={handleChange} required placeholder="Escribe tu mensaje..."></textarea>
                <Button type="submit" className="btnEnviar">Enviar <i class="bi bi-send-fill"></i></Button>
            </form>
            {modal && (
                <div className="modalOverlay">
                    <div className="modal">
                        <i className="bi bi-check-circle-fill iconSuccess"></i>
                        <h3>Mensaje enviado</h3>
                        <p>Gracias por contactarme, te responderé pronto.</p>

                        <Button className="cerrar" onClick={() => setModal(false)}>
                            Cerrar
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}