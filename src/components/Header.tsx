import { css } from "@styled-system/css";
import headerLogo from "@/assets/images/header-logo.png";

interface Props {
  onScrollToSection: (
    section: "timetable" | "location" | "contact",
  ) => void;
}

const Header = ({ onScrollToSection }: Props) => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <img src={headerLogo} />
        </div>
        <ul className={styles.menu}>
          <li onClick={() => onScrollToSection("timetable")}>Timetable</li>
          <li onClick={() => onScrollToSection("location")}>Location</li>
          <li onClick={() => onScrollToSection("contact")}>Contact</li>
        </ul>
        {
          <button 
            className={styles.registerButton}
            onClick={() => window.open('https://smartstore.naver.com/let-us-go/products/12322386905', '_blank')}
          >
          🎟️ 티켓 구매하기
          </button>
        }
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  container: css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 101,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "min(50px, 5%)",
    width: "100%",
    height: "8rem",
    backgroundColor: "rgba(19, 22, 28, 0.8)",
    fontSize: "2.4rem",
    fontFamily: "Unbounded",
    fontWeight: "300",

    "@media (max-width: 1214px)": {
      display: "none",
    },
    "@media (min-width: 769px)": {
      display: "none",
    },

    "@media (min-width: 1215px)": {
      display: "flex",
    },

    "@media (max-width: 768px)": {
      display: "flex",
      height: "5.6rem",
    },
  }),
  logoContainer: css({
    width: "15.7rem",
    height: "3.6rem",

    "@media (max-width: 768px)": {
      width: "11.2rem",
      height: "2.8rem",
    },
  }),
  nav: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "121.6rem",
    width: "100%",
    cursor: "pointer",
  }),
  menu: css({
    display: "flex",
    flexDirection: "row",
    gap: "4.8rem",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  registerButton: css({
    display: "none",
    width: "12.4rem",
    height: "3rem",
    backgroundColor: "springSolid",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "ffffff",
    borderRadius: "5rem",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
};
