'use client';

import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider
import styles from '../ui/dashobard/dashboard.module.css';
import Navbar from '../ui/dashobard/navbar/navbar';
import Sidebar from '../ui/dashobard/sidebar/sidebar';
import "../ui/globals.css";

const Layout = ({ children }) => {
  return (
    <AuthProvider> {/* Wrapping everything with AuthProvider */}
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.navbar}>
          <Navbar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default Layout;



