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
        무더운 여름이 본격적으로 시작되는 7월입니다.{"\n"}
        WWDC의 열기가 여전히 뜨거운 가운데,{"\n"}그 열정을 함께 나누는 찍먹톤을 개최합니다.{"\n"}
        WWDC25의 기술을 슬쩍 찍어먹어보는 해커톤, 찍먹톤!{"\n"}
        새로운 도전과 함께 성장할 수 있는 기회를 함께해보는 건 어떨까요?
      </div>
      <div className={classNames(styles.description, styles.mobileOnly)}>
        무더운 여름이 본격적으로 시작되는 7월입니다.{"\n"}
        WWDC의 열기가 여전히 뜨거운 가운데,{"\n"}그 열정을 함께 나누는 찍먹톤을 개최합니다.{"\n"}
        WWDC25의 기술을 슬쩍{"\n"}찍어먹어보는 해커톤, 찍먹톤!{"\n"}
        새로운 도전과 함께 성장할 수 있는{"\n"}기회를 함께해보는 건 어떨까요?
      </div>
      <div className={styles.eventIntro}>
        7월 n일 토요일, {"\n"}함께 모여 뜨거운 여름을 불태워보자구요 🙌
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
    color: "summer",
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
