//import Directorio from "../Directorio/Directorio";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css"

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/remerassublimadasyosoyyo/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/tiendayosoyyo/", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/message/", label: "Whatsapp" },
 
];

function Footer() {

    return (
        <footer className={styles.footer}>

            {/*   <Directorio/> */}
           

            <p className={styles.slogan}>
                Realizado con Amor ♡ 
            </p>
             <div className={styles.socialContainer}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                target="_blank"
                href={social.href}
                aria-label={social.label}
                 className={styles.socialLink}
              >
                <social.icon className={styles.icon} />
              </a>
            ))}
          </div>

            <p className={styles.copy}>© 2026 Tienda Yo Soy Yo - Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer;