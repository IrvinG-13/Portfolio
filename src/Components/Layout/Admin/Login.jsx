import Button from "../../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Services/authService";


export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const res = await login({ username, password });
        localStorage.setItem("token", res.data.token);
        navigate("/admin/dashboard");
        } catch (err) {
            console.error(err);
            alert("Credenciales incorrectas");
        }
    };

    return(
        <>
        <section className="sectionLogin">
            <h1 className="tituloLogin">Login</h1>
            <form onSubmit={handleSubmit} className="adminForm" action="">
                <input onChange={(e)=> setUsername(e.target.value)} className="inputLogin" placeholder="Username..." type="text" />
                <input onChange={(e)=> setPassword(e.target.value)} className="inputLogin" placeholder="Password..." type="text" />
                <Button type="submit" className="btnLogin">Login</Button>
            </form>
        </section>
        
        </>
    )
}