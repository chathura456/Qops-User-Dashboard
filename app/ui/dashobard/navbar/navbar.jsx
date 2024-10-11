"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch
} from "react-icons/md";
import styles from './navbar.module.css';
import avatar from "/public/avatar.jpg";

const Navbar = () => {
  
  const pathName = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='Search...' className={styles.input}/>
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
        <div className={styles.user}>
      <Image className={styles.userImage} src={avatar} alt="" width="50" height="50"/>
      <div className={styles.userDetails}>
        <span className={styles.userName}>Swetha Shankaresh</span>
        <span className={styles.userRole}>student</span>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar
