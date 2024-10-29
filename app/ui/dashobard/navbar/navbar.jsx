"use client";

import AuthContext from "@/app/context/AuthContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md"; // Adjust the path as per your folder structure
import styles from "./navbar.module.css";
import avatar from "/public/avatar.jpg";
import icon from "/public/menu.png";

const Navbar = () => {
  const pathName = usePathname();
  const { user } = useContext(AuthContext);

  // Capitalize the first letter of each word in the user's name
  // Capitalize the first letter of each word in the user's name
  const capitalizeName = (name) => {
    return name ? name.replace(/\b\w/g, (char) => char.toUpperCase()) : "Guest"; // Default to 'Guest' if name is undefined
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.title} flex items-center space-x-3`}>
        <span>
          {" "}
          <Image src={icon} alt="" width={25} />
        </span>
        <span> {pathName.split("/").pop()} </span>
      </div>

      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src={avatar}
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetails}>
            <span className={styles.userName}>
              {user ? capitalizeName(user.username) : "Guest"}
            </span>
            <span className={styles.userRole}>{user ? user.type : "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
