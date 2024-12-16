import { Link, useLocation } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import refriIcon from "../assets/icons/refriIcon.png";
import recipeIcon from "../assets/icons/recipeIcon.png";
import bookmarkIcon from "../assets/icons/bookmarkIcon.png";
import communityIcon from "../assets/icons/communityIcon.png";
import mypageIcon from "../assets/icons/mypageIcon.png";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navContainer}>
      <Link
        to="/home"
        className={`${styles.navItem} ${location.pathname === "/home" ? styles.active : ""}`}
      >
        <div className={`${styles.iconBack} ${location.pathname === "/home" ? styles.active : ""}`}>
          <img src={refriIcon} alt="내 냉장고" className={styles.navIcon} />
        </div>
        <span>내 냉장고</span>
      </Link>

      <Link
        to="/recipes"
        className={`${styles.navItem} ${location.pathname === "/recipes" ? styles.active : ""}`}
      >
        <div className={`${styles.iconBack} ${location.pathname === "/recipes" ? styles.active : ""}`}>
          <img src={recipeIcon} alt="추천 레시피" className={styles.navIcon} />
        </div>
        <span>추천 레시피</span>
      </Link>

      <Link
        to="/bookmark"
        className={`${styles.navItem} ${location.pathname === "/bookmark" ? styles.active : ""}`}
      >
        <div className={`${styles.iconBack} ${location.pathname === "/bookmark" ? styles.active : ""}`}>
          <img src={bookmarkIcon} alt="북마크" className={styles.navIcon} />
        </div>
        <span>북마크</span>
      </Link>

      <Link
        to="/community"
        className={`${styles.navItem} ${location.pathname === "/community" ? styles.active : ""}`}
      >
        <div className={`${styles.iconBack} ${location.pathname === "/community" ? styles.active : ""}`}>
          <img src={communityIcon} alt="커뮤니티" className={styles.navIcon} />
        </div>
        <span>커뮤니티</span>
      </Link>

      <Link
        to="/mypage"
        className={`${styles.navItem} ${location.pathname === "/mypage" ? styles.active : ""}`}
      >
        <div className={`${styles.iconBack} ${location.pathname === "/mypage" ? styles.active : ""}`}>
          <img src={mypageIcon} alt="내 정보" className={styles.navIcon} />
        </div>
        <span>내 정보</span>
      </Link>
    </nav>
  );
};

export default NavBar;