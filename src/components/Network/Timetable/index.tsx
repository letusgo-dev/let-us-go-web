import Signature2Pc from "@/assets/svgs/signature2-pc.svg?react";
import Signature2Mobile from "@/assets/svgs/signature2-mobile.svg?react";
import { css } from "@styled-system/css";
import { forwardRef } from "react";
import Time from "./Time";
import Schedule from "./Schedule";
import Event from "./Event";

const Timetable = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.signaturePc}>
          <Signature2Pc />
        </div>
        <div className={styles.signatureMobile}>
          <Signature2Mobile />
        </div>
      </div>
      <div className={styles.title}>Timetable</div>
      <div className={styles.timetableContainer}>
        <div className={styles.timeContainer}>
          <Time>19:00-19:10</Time>
          <Time>21:00-21:10</Time>
          <Time>22:00-22:30</Time>
          <Time>상시</Time>
        </div>
        <div className={styles.scheduleContainer}>
          <Schedule>
            🎤 개회사 <span className={styles.time}>(19:00 - 19:10)</span>
          </Schedule>
          <Schedule>
            📸 단체사진 촬영
            <span className={styles.time}>(21:00 - 21:10)</span>
          </Schedule>
          <Schedule>
            🧹 마무리 <span className={styles.time}>(22:00 - 22:30)</span>
          </Schedule>
          <Event>
            <p>🎄 행사 속 행사 🎄</p><br/>
            <b>무엇이든 물어보세요</b> 렛어스고 운영진에게 물어보고 싶은 그 무엇이든, 질문 받아요!<br/><br/>
            <b>렛어스고 골든벨</b> 퀴즈도 풀고 상품도 받아가세요!<br/><br/>
            <b>개입앱 홍보코너</b> 내가 만든 앱, 마음껏 자랑해보세요!<br/>
          </Event>
        </div>
      </div>
    </div>
  );
});

export default Timetable;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    marginBottom: "28rem",
    width: "calc(100vw - 6.4rem)",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "12rem",
    },
  }),
  logoContainer: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  }),
  signaturePc: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  signatureMobile: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "winter",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  timetableContainer: css({
    display: "flex",
    alignItems: "flex-start",
    maxWidth: "121.6rem",
    width: "100%",
  }),
  timeContainer: css({
    color: "winter",
    marginRight: "3.6rem",

    "@media (max-width: 768px)": {
      marginRight: "1.2rem",
    },
  }),
  scheduleContainer: css({
    flexGrow: 1,
  }),
  time: css({
    fontSize: "2.8rem",
    fontWeight: 500,
    marginLeft: "0.5rem",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  }),
  scheduleSmall: css({
    height: "5.9rem",

    "@media (max-width: 768px)": {
      height: "3rem",
    },
  }),
  scheduleMedium: css({
    height: "9.1rem",

    "@media (max-width: 768px)": {
      height: "4.6rem",
    },
  }),
  scheduleBig: css({
    height: "65.8rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",

    "@media (max-width: 768px)": {
      height: "35rem",
    },
  }),
  lastPresentation: css({
    height: "9.1rem",

    "@media (max-width: 1214px)": {
      fontSize: "2.5rem",
    },

    "@media (max-width: 768px)": {
      height: "2.6rem",
    },
  }),
  awards: css({
    height: "5.9rem",

    "@media (max-width: 768px)": {
      height: "2.6rem",
    },
  }),
};
