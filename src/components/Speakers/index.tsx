import { forwardRef } from "react";
import { css } from "@styled-system/css";
import ProfileCard from "./ProfileCard";
import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
import commingsoonImage from "@/assets/svgs/logo_filled.svg";
import gomImage from "@/assets/images/Speakers/bear.jpeg";
import smileImage from "@/assets/images/Speakers/smile.jpeg";
import tomImage from "@/assets/images/Speakers/tom.jpg";
import alvinImage from "@/assets/images/Speakers/alvin.jpeg";


const Speakers = forwardRef<HTMLDivElement>((_props, ref) => {
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
      <div className={styles.title}>Speakers</div>
      <div className={styles.cardContainer}>
        <ProfileCard
          image={gomImage}
          role="speaker"
          nickname="곰튀김"
          comment="리얼리즘 프로그래머"
        />
        <ProfileCard
          image={smileImage}
          role="speaker"
          nickname="스마일"
          comment={
            <>
            버그와 함께 미소를 잃은<br/>
            스마일입니다.
            </>
            }
        />
        <ProfileCard
          image={tomImage}
          role="speaker"
          nickname="톰"
          comment="육아 관련 대화 환영"
        />
        <ProfileCard
          image={alvinImage}
          role="speaker"
          nickname="앨빈"
          comment="Do you like maple syrup?"
        />
        <ProfileCard
          image={commingsoonImage}
          role="speaker"
          nickname="이옥민"
          comment="Coming soon"
        />
        <ProfileCard
          image={commingsoonImage}
          role="speaker"
          nickname="곧 공개됩니다"
          comment="Coming soon"
        />
      </div>
    </div>
  );
});

export default Speakers;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  cardContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "3.2rem",
    margin: "0 auto",

    "@media (max-width: 884px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridGap: "2rem",
      width: "100%",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
