//import Directorio from "../Directorio/Directorio";
import styles from "./Footer.module.css"

function Footer() {

    return (
        <footer className={styles.footer}>

            {/*   <Directorio/> */}
           

            <p className={styles.slogan}>
                Realizado con Amor ♡ 
            </p>

            <p className={styles.copy}>© 2026 Tienda Yo Soy Yo - Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer;