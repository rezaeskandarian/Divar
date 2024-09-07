import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layouts.module.css"
const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
};

export default Layouts;
   