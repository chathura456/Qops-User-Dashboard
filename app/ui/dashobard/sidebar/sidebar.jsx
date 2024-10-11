

import {
  MdBookmarks,
  MdDashboard,
  MdDateRange,
  MdHelp,
  MdLibraryBooks,
  MdLogout,
  MdMessage,
  MdStars,
  MdTask,
  MdWorkHistory,
  MdWorkspacePremium
} from "react-icons/md"; // Ensure react-icons is installed

import MenuLink from "@/app/ui/dashobard/sidebar/menuLink/menuLink";
import Image from "next/image";
import styles from "./sidebar.module.css";
import logo from "/public/logo.png";

const menuItems = [
  {
    title: "",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Calender",
        path: "/dashboard/calender",
        icon: <MdDateRange />,
      },
      {
        title: "Library",
        path: "/dashboard/library",
        icon: <MdLibraryBooks />,
      },
      {
        title: "Courses",
        path: "/dashboard/courses",
        icon: <MdBookmarks/>,
      },
      {
        title: "Assignments",
        path: "/dashboard/assignments",
        icon: <MdTask />,
      },
      {
        title: "Connect",
        path: "/dashboard/connect",
        icon: <MdMessage />,
      },
      {
        title: "Achievements",
        path: "/dashboard/achievements",
        icon: <MdWorkspacePremium />,
      },
      {
        title: "Pathways",
        path: "/dashboard/pathways",
        icon: <MdWorkHistory />,
      },
    ],
  },
  {
    title: "",
    list: [
      {
        title: "Upgrade to Premium",
        path: "/dashboard/premium",
        icon: <MdStars />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.user}>
      <Image src={logo} alt="" width="200" />
    </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>

            {cat.list.map((item) => (
          
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <hr/>
      <button className={styles.logout}>
       <MdLogout />
       Logout
      </button>
    </div>
  );
};

export default Sidebar;
