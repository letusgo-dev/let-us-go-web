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
        어느새 귀뚜라미가 울기 시작하는 9월입니다. {"\n"}
        이번 let us: Go! 2025 Fall 행사는 전격 네트워킹 행사로 진행합니다! {"\n"}{"\n"}
        iOS 개발자를 비롯하여 기획자, 디자이너도 함께 참여하여 자유롭게 교류하고,{"\n"}
        최신 기술 트렌드와 동료들의 경험을 나눌 수 있는 자리입니다.{"\n"}{"\n"}
        스타트업, 대기업, 개인사업자 등 다양한 환경의 사람들을 만나며{"\n"}
        여러분의 네트워크를 확장하고 유용한 인사이트를 얻을 수 있는 기회를 놓치지 마세요!{"\n"}{"\n"}
      </div>
      <div className={classNames(styles.description, styles.mobileOnly)}>
        어느새 귀뚜라미가 울기 시작하는 9월입니다. {"\n"}
        이번 let us: Go! 2025 Fall 행사는 {"\n"}전격 네트워킹 행사로 진행합니다! {"\n"}{"\n"}
        iOS 개발자를 비롯하여 {"\n"}기획자, 디자이너도 함께 참여하여 {"\n"}자유롭게 교류하고,{"\n"}
        최신 기술 트렌드와 동료들의 경험을 {"\n"}나눌 수 있는 자리입니다.{"\n"}{"\n"}
        스타트업, 대기업, 개인사업자 등 {"\n"}다양한 환경의 사람들을 만나며{"\n"}
        여러분의 네트워크를 확장하고{"\n"}유용한 인사이트를 얻을 수 있는 기회를{"\n"}놓치지 마세요!{"\n"}{"\n"}
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
