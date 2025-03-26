import classNames from "classnames";
import Signature1Big from "@/assets/svgs/signature1-big.svg?react";
import Signature1Small from "@/assets/svgs/signature1-small.svg?react";
import groupPhotoImage from "@/assets/images/group-photo.jpg";
import { css } from "@styled-system/css";

const Invitation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature1Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature1Small />
      </div>
      <div className={styles.title}>Invitation</div>
      <div className={classNames(styles.description, styles.desktopOnly)}>
        let us: Go!는 iOS 개발에 관심있는 모두가 모여{"\n"}개발 노하우와 다양한 경험을 나누고{"\n"}자유롭게 소통하는 iOS 커뮤니티입니다.{"\n"}{"\n"}
        새로운 시작과 도전이 어울리는 계절, 봄이 찾아왔습니다.{"\n"}따스한 봄의 기운과 함께 let us: Go!에서{"\n"}성장할 기회를 가져보는 건 어떠신가요?{"\n"}{"\n"}
      </div>
      <div className={classNames(styles.description, styles.mobileOnly)}>
        let us: Go!는 iOS 개발에 관심있는 모두가 모여{"\n"}개발 노하우와 다양한 경험을 나누고{"\n"}자유롭게 소통하는 iOS 커뮤니티입니다.{"\n"}{"\n"}
        새로운 시작과 도전이 어울리는 계절, 봄이 찾아왔습니다.{"\n"}따스한 봄의 기운과 함께 let us: Go!에서{"\n"}성장할 기회를 가져보는 건 어떠신가요?{"\n"}{"\n"}
      </div>
      <div className={styles.eventIntro}>
        ‘4월 26일 토요일’ [let us: Go! 2025 봄]을 개최합니다.
      </div>
      <div className={styles.imageContainer}>
        <img src={groupPhotoImage} alt="단체사진" />
      </div>
    </div>
  );
};

export default Invitation;

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

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
    },
  }),
  description: css({
    fontSize: "2.8rem",
    whiteSpace: "pre-line",
    textAlign: "center",
    marginTop: "4.4rem",
    marginBottom: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginTop: "3.6rem",
    },
  }),
  desktopOnly: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  mobileOnly: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  eventIntro: css({
    fontSize: "2.8rem",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "9.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginBottom: "3.6rem",
      whiteSpace: "pre-line",
    },
  }),
  imageContainer: css({
    maxWidth: "121.6rem",

    width: "calc(100% - 6.4rem)",
    borderRadius: "2.4rem",
    overflow: "hidden",

    "@media (max-width: 768px)": {
      marginBottom: "3.6rem",
      width: "calc(100% - 4rem)",
      borderRadius: "0.8rem",
    },
  }),
};
