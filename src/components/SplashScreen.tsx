import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SplashScreen.module.css";
import splashImage from "../assets/images/splash.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 2초 후 로그인 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer); // 타이머 클리어
  }, [navigate]);

  return (
    <div className={styles.splashContainer}>
      <img src={splashImage} alt="Splash Screen" className={styles.splashImage} />
    </div>
  );
};

export default SplashScreen;