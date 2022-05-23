import styles from "../styles/Layout.module.css";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <>
        <Navbar />
        {children}
        <Footer/>
        <Copyright/>
      </>
    </div>
  );
};

export default Layout;
