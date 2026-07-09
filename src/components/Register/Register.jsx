import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Register.module.css"



const Register = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        console.log("EMAIL QUE LLEGA:", email);
        e.preventDefault();

        if (!nombre || !email || !password || !confirmPassword) {
            alert("Completá todos los campos.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            await signup(nombre, email, password);

            alert("¡Usuario registrado con éxito!");

            navigate("/");
        } catch (error) {
            console.error(error);



            switch (error.code) {

                case "auth/invalid-email":
                    setError("El correo electrónico no es válido.");
                    break;

                case "auth/email-already-in-use":
                    setError("Este correo ya está registrado.");
                    break;

                case "auth/weak-password":
                    setError("La contraseña debe tener al menos 6 caracteres.");
                    break;

                default:
                    setError("No se pudo crear la cuenta. Intentalo nuevamente.");
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <h2>Crear cuenta</h2>

                <p>Completá los datos para registrarte.</p>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button type="submit">
                        Crear cuenta
                    </button>

                </form>

                <span>
                    ¿Ya tenés cuenta?
                    <Link to="/login"> Ingresá</Link>
                </span>

            </div>
        </div>
    );
};

export default Register;