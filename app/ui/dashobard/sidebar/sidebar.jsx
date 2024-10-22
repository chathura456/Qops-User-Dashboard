"use client"
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
  MdWorkspacePremium,
} from "react-icons/md"; // Ensure react-icons is installed

import MenuLink from "@/app/ui/dashobard/sidebar/menuLink/menuLink";
import Image from "next/image";
import { useState } from "react";
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
        icon: <MdBookmarks />,
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
  const [showConfirm, setShowConfirm] = useState(false); // New state for showing the confirmation dialog

  // Function to handle logout
  const handleLogout = () => {
    setShowConfirm(true); // Show the confirm dialog when logout is clicked
  };

  // Function to handle confirmation (Yes/No)
  const confirmLogout = (confirm) => {
    if (confirm) {
      // Perform the actual logout logic here
      console.log("User logged out"); // Replace this with actual logout logic (e.g., calling logout function)
      // Redirect to login or home page after logging out
      window.location.href = "/";
    } else {
      setShowConfirm(false); // Hide the confirm dialog if user cancels
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src={logo} alt="" width="200" />
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <hr />
      <button className={styles.logout} onClick={handleLogout}>
        <MdLogout />
        Logout
      </button>

      {showConfirm && (
        <div className={styles.confirmDialog}>
          {/* Simple Confirm Dialog */}
          <p>Are you sure you want to logout?</p>
          <div className={styles.confirmButtons}>
            <button
              className={styles.confirmYes}
              onClick={() => confirmLogout(true)}
            >
              Yes
            </button>
            <button
              className={styles.confirmNo}
              onClick={() => confirmLogout(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
