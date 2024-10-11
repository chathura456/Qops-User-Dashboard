import Announcements from "../ui/dashobard/announcements/announcements";
import Assignments from "../ui/dashobard/assignments/assignments";
import styles from "../ui/dashobard/dashboard.module.css";
import Leaderboard from "../ui/dashobard/leaderboard/leaderboard";
import Progress from "../ui/dashobard/progress/progress";
import Rightbar from "../ui/dashobard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <Announcements/>
        <div className={styles.cards}>
          <Leaderboard />
          <Progress />
        </div>
        <Assignments/>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
