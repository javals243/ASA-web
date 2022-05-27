import styles from "../styles/Layout.module.css";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Navbar from "./Navbar";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <>
        <Navbar />
        <ToastContainer/>
        {children}
        <Footer/>
        <Copyright/>
      </>
    </div>
  );
};

export default Layout;
