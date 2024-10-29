"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menuLink.module.css";

const MenuLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && "bg-blue-600 text-white hover:bg-blue-600"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
