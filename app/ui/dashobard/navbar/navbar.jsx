import AuthContext from "@/app/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styles from "./navbar.module.css";
import avatar from "/public/avatar.jpg";

const devOpsTerms = [
  "Kubernetes",
  "Docker",
  "CI/CD",
  "Jenkins",
  "Ansible",
  "Terraform",
  "GitOps",
  "Monitoring",
  "Prometheus",
  "Grafana",
  "AWS",
  "Azure",
  "GCP",
  "Helm",
  "Agile",
  "DevSecOps",
  "Microservices",
  "Containerization",
  "IaC",
  "Observability",
  "Logging",
  "Scaling",
  "Automation",
];

const notifications = [
  "Server maintenance scheduled at 10 PM",
  "New DevOps course available",
  "Jenkins pipeline updated",
  "Additional notification for demo",
  "Reminder to update Docker images",
];

const Navbar = () => {
  const pathName = usePathname();
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    if (input) {
      const filteredSuggestions = devOpsTerms.filter((term) =>
        term.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const capitalizeName = (name) => {
    return name ? name.replace(/\b\w/g, (char) => char.toUpperCase()) : "Guest";
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
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
          <input
            type="text"
            placeholder="Search..."
            className={styles.input}
            value={searchTerm}
            onChange={handleInputChange}
          />
          {suggestions.length > 0 && (
            <div className={styles.suggestions}>
              {suggestions.map((suggestion, index) => (
                <div key={index} className={styles.suggestionItem}>
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.icons}>
          <Link href="/dashboard/connect">
            <MdOutlineChat size={20} />
          </Link>
          <div className={styles.notifications} onClick={toggleNotifications}>
            <MdNotifications size={20} />
            {showNotifications && (
              <div className={styles.notificationsDropdown}>
                {notifications.slice(0, 10).map((notification, index) => (
                  <div key={index} className={styles.notificationItem}>
                    {notification}
                  </div>
                ))}
              </div>
            )}
          </div>

          <MdPublic size={20} />
        </div>
        <Link href="/dashboard/profile">
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
              <span className={styles.userRole}>
                {user ? user.type : "N/A"}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
