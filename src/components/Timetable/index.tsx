import { css } from "@styled-system/css";
import { forwardRef } from "react";
import { ReactNode } from "react";

type Track = "A트랙" | "B트랙" | "상시트랙";

interface Session {
  time: string;
  title: ReactNode;
  description?: ReactNode;
}

interface Schedule {
  [time: string]: {
    [track in Track]?: Session;
  };
}

const schedule: Schedule = {
  "10:00": {
    "A트랙": {
      time: "10:00",
      title: "#주제 토크",
      description: (
        <>
        구역별로 대주제를 정해<br/>
        관심사가 같은 사람끼리 모여 네트워킹
        </>
      ),
    },
  },
  "11:00": {
    "A트랙": {
      time: "11:00",
      title: (
        <>
        #요즘 코딩<br/>- 금쪽같은 내 AI (feat. 재르시)
        </>
        ),
      description:  (
        <>
        AI 활용 개발의 현주소를 함께 이야기하고<br/>
        노하우를 나눕니다
        </>
      ),
    },
  },
  "12:00": {
    "A트랙": {
      time: "12:00",
      title: "#주제 토크",
      description: (
        <>
        구역별로 대주제를 정해<br/>
        관심사가 같은 사람끼리 모여 네트워킹
        </>
      ),
    },
    "B트랙": {
      time: "12:00",
      title: "프리 네트워킹",
      description: (
        <>
          이번 시간엔 관심없는 이벤트라구요?<br/>
          B트랙은 편하고 자유롭게 소통할 수 있는 공간입니다
        </>
      ),
    },
    "상시트랙": {
      time: "12:00",
      title: "나를 팝니다",
      description: (
        <>
          저 좀 봐주세요!!<br/>더 좋은 일자리 찾아요!<br/>더 좋은 동료 찾아요!
        </>
      ),
    },
  },
  "13:00": {
    "A트랙": {
      time: "13:00",
      title: "#자유시간/점심시간",
    },
  },
  "14:00": {
    "A트랙": {
      time: "14:00",
      title: "#스피드 미팅",
      description:  (
        <>
          🌸이번 행사의 꽃🌸<br/>
          짜릿한 5분간의 1:1 만남. 절대 놓치지 마세요!
        </>
      ),
    },
  },
  "15:00": {
    "A트랙": {
      time: "15:00",
      title: "#주제 토크",
      description: (
        <>
        구역별로 대주제를 정해<br/>
        관심사가 같은 사람끼리 모여 네트워킹
        </>
      ),
    },
  },
  "16:00": {
    "A트랙": {
      time: "16:00",
      title: "#개발자! 골든벨",
      description: "울려라 골든벨!!! 내가 개발 왕이다!",
    },
  },
};

export const Timetable = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.timetableContainer}>
      <table>
        <thead>
          <tr className={styles.timetableTitle}>
            <th>시간</th>
            <th>A트랙</th>
            <th>B트랙</th>
            <th>상시트랙</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(schedule).map(([time, tracks], index, arr) => (
            <tr
              key={time}
              className={index === arr.length - 1 ? styles.lastRow : undefined}
            >
              <td className={styles.time}>{time}</td>
              <td className={styles.scheduleItemA} >
                {tracks["A트랙"] && (
                  <>
                     <div className={styles.sessionTitle}>{tracks["A트랙"].title}</div>
                     <div>{tracks["A트랙"].description}</div>
                  </>
                )}
              </td>
              <td className={styles.scheduleItemBC} >
                {tracks["B트랙"] && (
                  <>
                    <div className={styles.sessionTitle}>{tracks["B트랙"].title}</div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {tracks["B트랙"].description}
                    </p>
                  </>
                )}
              </td>
              <td className={styles.scheduleItemBC}>
                {tracks["상시트랙"] && (
                  <>
                    <div className={styles.sessionTitle}>{tracks["상시트랙"].title}</div>
                    <div>{tracks["상시트랙"].description}</div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
    maxWidth: "121.6rem",
    paddingY: "2rem",
    paddingX: "3rem",
    marginBottom: "10rem",
    backgroundColor: "background.300",
    borderRadius: "2rem",

    "@media (max-width: 768px)": {
      paddingY: "1.4rem",
      paddingX: "2rem",
    },
  }),
  scheduleItemA: css({
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    gap: "10rem",
    borderBottom: "0.1rem solid",

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
  scheduleItemBC: css({
    paddingLeft: "1rem",
    paddingRight: "1rem",
    gap: "10rem",

    _last: {
      marginBottom: "4.8rem",
      border: "none",
    },

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
      paddingBottom: "2rem",
      gap: "3.7rem",
      marginTop: "2.4rem",

      _last: {
        marginBottom: "2rem",
      },
    },
  }),
  timetableTitle: css({
    minWidth: "7rem",
    fontSize: "2rem",
    fontWeight: "semibold",
    whiteSpace: "nowrap",
    "@media (max-width: 768px)": {
      minWidth: "fit-content",
    },
  }),
  time: css({
    minWidth: "7rem",
    fontSize: "2rem",
    fontWeight: "semibold",
    whiteSpace: "nowrap",
    borderBottom: "0.1rem solid",

    "@media (max-width: 768px)": {
      minWidth: "fit-content",
    },
  }),
  lastRow: css({
    "& td": {
      borderBottom: "none !important",
    },
  }),
  sessionTitle: css({
    fontSize: "2.5rem",
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
