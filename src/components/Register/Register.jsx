import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Register.module.css"



const Register = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
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
                case "auth/email-already-in-use":
                    alert("Ese correo ya está registrado.");
                    break;

                case "auth/invalid-email":
                    alert("Correo electrónico inválido.");
                    break;

                case "auth/weak-password":
                    alert("La contraseña es demasiado débil.");
                    break;

                default:
                    alert("Ocurrió un error al registrar el usuario.");
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