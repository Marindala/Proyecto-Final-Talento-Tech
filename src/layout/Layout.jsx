import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";


function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header/>

       <main className={styles.main}>
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
}

export default Layout;