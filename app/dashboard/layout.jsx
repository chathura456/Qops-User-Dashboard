import styles from '../ui/dashobard/dashboard.module.css';
import Navbar from '../ui/dashobard/navbar/navbar';
import Sidebar from '../ui/dashobard/sidebar/sidebar';
import "../ui/globals.css";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout
