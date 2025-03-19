import { forwardRef } from "react";
import { css } from "@styled-system/css";
import ProfileCard from "./SpeakersSupporters/ProfileCard";
import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
import yagomImage from "@/assets/images/Committees/yagom.png";
import jercyImage from "@/assets/images/Committees/jercy.png";
import kuuImage from "@/assets/images/Committees/kuu.png";
import unchainImage from "@/assets/images/Committees/unchain.png";
import mindiImage from "@/assets/images/Committees/mindi.png";
import miiiImage from "@/assets/images/Committees/miiii.png";
import mingsoImage from "@/assets/images/Committees/mingso.png";

const Committees = forwardRef<HTMLDivElement>((_props, ref) => {
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
      <div className={styles.title}>Committees</div>
      <div className={styles.cardContainer}>
        <ProfileCard
          image={yagomImage}
          role="Committee"
          nickname="야곰"
          comment="디지털보다 아날로그를 사랑하는 프로그래머입니다."
        />
        <ProfileCard
          image={jercyImage}
          role="Committee"
          nickname="재르시"
          comment="모먼티카 많은 관심 부탁드려요"
        />
        <ProfileCard
          image={kuuImage}
          role="Committee"
          nickname="Kuu"
          comment="모두 건강하고 행복하세요 💕"
        />
        <ProfileCard
          image={unchainImage}
          role="Committee"
          nickname="언체인"
          comment="철인3종나가실 동료 구합니다! 연락주세요"
        />
        <ProfileCard
          image={mindiImage}
          role="Committee"
          nickname="민디"
          comment="오쓰 🤙"
        />
        <ProfileCard
          image={miiiImage}
          role="Committee"
          nickname="미이이이"
          comment="귀여운게 최고야🐶"
        />
        <ProfileCard
          image={mingsoImage}
          role="Committee"
          nickname="밍소"
          comment="사실주의 개발자"
        />
      </div>
    </div>
  );
});

export default Committees;

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
