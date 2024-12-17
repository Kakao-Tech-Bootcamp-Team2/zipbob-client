import styles from "../styles/LoginPage.module.css";
import logoImage from "../assets/images/logo.png"; // 집밥 로고
import googleLogo from "../assets/images/googleLogo.png";
import kakaoLogo from "../assets/images/kakaoLogo.png";
import naverLogo from "../assets/images/naverLogo.png";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src={logoImage} alt="ZipBob 로고" className={styles.logo} />
      </div>

      {/* 로그인 버튼들 */}
      <div className={styles.buttonSection}>
        <button className={`${styles.loginButton} ${styles.google}`}>
          <img src={googleLogo} alt="구글 로고" className={styles.icon}/> 구글 로그인으로 시작하기
        </button>
        <button className={`${styles.loginButton} ${styles.naver}`}>
          <img src={naverLogo} alt="네이버 로고" className={styles.icon}/> 네이버 로그인으로 시작하기
        </button>
        <button className={`${styles.loginButton} ${styles.kakao}`}>
          <img src={kakaoLogo} alt="카카오 로고" className={styles.icon}/> 카카오 로그인으로 시작하기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;