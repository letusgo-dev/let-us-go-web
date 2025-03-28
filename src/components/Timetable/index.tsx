import Signature3Big from "@/assets/svgs/signature3-big.svg?react";
import Signature3Small from "@/assets/svgs/signature3-small.svg?react";
import { css } from "@styled-system/css";
import { forwardRef } from "react";

const Timetable = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.bigSignature}>
          <Signature3Big />
        </div>
        <div className={styles.smallSignature}>
          <Signature3Small />
        </div>
      </div>
      <div className={styles.title}>Timetable</div>
      <div className={styles.timetableContainer}>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:00 - 13:10</div>
          <div>
            <div className={styles.sessionTitle}>개회사</div>
            <div className={styles.hostInfo}>let us: Go!</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:10 - 13:30</div>
          <div>
            <div className={styles.sessionTitle}>왜 내 코드는 매번 스파게티가 될까? iOS 클린 아키텍처 입문</div>
            <div className={styles.hostInfo}>스미스</div>

          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:30 - 13:50</div>
          <div>
          <div className={styles.sessionTitle}>Swift 소유권 키워드 (noncopyable, borrowing, consuming) 톺아보기</div>
            <div className={styles.hostInfo}>톰</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:50 - 14:20</div>
          <div>
          <div className={styles.sessionTitle}>AudioKit 프레임워크를 활용하여 제작한 고성능 드럼 앱을 소개합니다</div>
            <div className={styles.hostInfo}>Alvin</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>14:20 - 14:40</div>
          <div>
            <div className={styles.sessionTitle}>쉬는시간</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>14:40 - 15:10</div>
          <div>
          <div className={styles.sessionTitle}>SwiftUI 렌더링 성능 개선</div>
            <div className={styles.hostInfo}>스마일</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>15:10 - 15:40</div>
          <div>
          <div className={styles.sessionTitle}>AI가 코딩하는 시대에 개발자가 되겠다구요?</div>
            <div className={styles.hostInfo}>곰튀김</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>15:40 - 16:50</div>
          <div>
            <div className={styles.sessionTitle}>Networking</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>16:50 - 17:00</div>
          <div>
            <div className={styles.sessionTitle}>단체사진 촬영 및 폐회사</div>
            <div className={styles.hostInfo}>let us: Go!</div>
          </div>
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
    background: "linear-gradient(to bottom, #00D0F3 0%, #0066FF 100%)",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "2.2rem",
    },
  }),
  timetableContainer: css({
    display: "flex",
    flexDirection: "column",
    maxWidth: "121.6rem",
    width: "100%",
    paddingY: "2.8rem",
    paddingX: "5.8rem",
    backgroundColor: "background.300",
    borderRadius: "2rem",

    "@media (max-width: 768px)": {
      paddingY: "1.4rem",
      paddingX: "2rem",
    },
  }),
  scheduleItem: css({
    display: "flex",
    flexDirection: "row",
    marginTop: "4.8rem",
    paddingBottom: "5.7rem",
    gap: "7.4rem",
    width: "100%",
    fontSize: "2.8rem",
    borderBottom: "0.2rem solid",

    _last: {
      marginBottom: "4.8rem",
      border: "none",
    },

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
      paddingBottom: "2rem",
      gap: "3.7rem",
      marginTop: "2.4rem",
      borderBottom: "0.1rem solid",

      _last: {
        marginBottom: "2rem",
      },
    },
  }),
  time: css({
    minWidth: "16.8rem",
    fontWeight: "semibold",
    whiteSpace: "nowrap",

    "@media (max-width: 768px)": {
      minWidth: "fit-content",
    },
  }),
  sessionTitle: css({
    fontSize: "3.2rem",
    fontWeight: "bold",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  hostInfo: css({
    color: "#CCD5E0",
    marginTop: "0.8rem",
  }),
  sessionDescription: css({
    fontSize: "2.4rem",
    marginTop: "3.2rem",

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  }),
};
