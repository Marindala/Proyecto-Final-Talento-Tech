import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import { validarEmail, validarPassword } from "../../utils/validations";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        const errorEmail = validarEmail(email);

        if (errorEmail) {
            setError(errorEmail);
            return;
        }

        const errorPassword = validarPassword(password);

        if (errorPassword) {
            setError(errorPassword);
            return;
        }

        try {
            const auth = getAuth();

            await signInWithEmailAndPassword(auth, email, password);

            navigate("/");

        } catch (error) {

            switch (error.code) {
                case "auth/invalid-credential":
                    setError("Correo o contraseña incorrectos.");
                    break;

                default:
                    setError("No se pudo iniciar sesión.");
            }
        }
    };



    /*   const handleLogin = (e) => {
          e.preventDefault();
  
          const auth = getAuth();
  
          signInWithEmailAndPassword(auth, email, password)
              .then(() => {
                  alert("¡Inicio de sesión exitoso!");
                  navigate("/");
              })
              .catch((error) => {
                  alert(error.message);
              });
      }; */

    return (
        <div className={styles.container}>

            <div className={styles.card}>

                <h2>Iniciar Sesión</h2>

                <p>Ingresá con tu cuenta</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}

                    />
                    {error.email && (
                        <p className={styles.error}>
                            {error.email}
                        </p>
                    )}

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                        }}
                    />
                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit">
                        Ingresar
                    </button>

                </form>

                <span>
                    ¿No tenés cuenta?
                    <Link to="/register"> Registrate</Link>
                </span>

            </div>

        </div>
    );
};

export default Login;