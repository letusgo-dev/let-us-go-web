import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
import { css } from "@styled-system/css";
import { forwardRef } from "react";
import Time from "./Time";
import Schedule from "./Schedule";

const Timetable = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.bigSignature}>
          <Signature2Big />
        </div>
        <div className={styles.smallSignature}>
          <Signature2Small />
        </div>
      </div>
      <div className={styles.title}>Timetable</div>
      <div className={styles.timetableContainer}>
        <div className={styles.timeContainer}>
          <Time>9:00 - 9:30</Time>
          <Time>09:40 - 10:30</Time>
          <Time>10:30 - 11:00</Time>
          <Time>11:00 - 19:00</Time>
          <Time>19:00 - 21:00</Time>
          <Time>21:00 - 21:30</Time>
        </div>
        <div className={styles.scheduleContainer}>
          <Schedule className={styles.scheduleSmall}>
            ✍️ 참가자 등록
            { /* <span className={styles.time}>(09:00 - 9:30)</span> */ }
          </Schedule>
          <Schedule>
            💭 아이디어 최종 정리
            {/* <span className={styles.time}>(9:40 - 10:30)</span> */ }
          </Schedule>
          <Schedule>
            🎤 아이디어 발표
             {/* <span className={styles.time}>(10:30 - 11:00)</span> */}
          </Schedule>
          <Schedule>
            🧑‍💻 개발 및 자율 점심식사
            {/* <span className={styles.time}>(11:00 - 19:00)</span> */}
          </Schedule>
          <Schedule> 
            🎤🍚 최종발표 및 저녁식사
            {/* <span className={styles.time}>(19:00 - 21:00)</span> */}
          </Schedule>
          <Schedule>
            🏆 시상 및 폐회
            {/* <span className={styles.time}>(21:00)</span> */}
          </Schedule>
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
  bigSignature: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  logoContainer: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  }),
  smallSignature: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "summer",
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
      height: "1rem",
    },
  }),
  awards: css({
    height: "5.9rem",

    "@media (max-width: 768px)": {
      height: "2.6rem",
    },
  }),
};
