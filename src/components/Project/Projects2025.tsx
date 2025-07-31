import { css } from "@styled-system/css";
import Card from "./Card";
import team1 from "@/assets/images/hackathon/2025/team1.png";
import team2 from "@/assets/images/hackathon/2025/team2.png";
import team3 from "@/assets/images/hackathon/2025/team3.png";
import team4 from "@/assets/images/hackathon/2025/team4.png";
import team5 from "@/assets/images/hackathon/2025/team5.png";
import team6 from "@/assets/images/hackathon/2025/team6.png";
import team7 from "@/assets/images/hackathon/2025/team7.png";
import team8 from "@/assets/images/hackathon/2025/team8.png";

const Projects2025 = () => {
  return (
    <div className={styles.cardContainer}>
      <Card href="https://github.com/letusGo-Hack/25_01_team1_zeta">
        <Card.Image src={team1} alt="프로젝트 LiquidZeta" aspectRatio="16/9"/>
        <Card.Year>2025</Card.Year>
        <Card.Title>LiquidZeta</Card.Title>
        <Card.Description>
          온디바이스 AI 기반 연애 코칭
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/25_07_letusgo_TetoEgen_diary">
        <Card.Image src={team7} alt="TONE 다이어리" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>TONE 다이어리</Card.Title>
        <Card.Description>
          일기로 테토/에겐력 측정하기
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/25_02_team2_codinglovestory">
        <Card.Image src={team2} alt="개발자 연애 시뮬레이션 (Developer Love Story)" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>개발자 연애 시뮬레이션 (Developer Love Story)</Card.Title>
        <Card.Description>
          SwiftUI로 개발한 iOS 연애 시뮬레이션 게임입니다. 개발자를 주제로 한 스토리와 선택지 기반 게임플레이를 제공합니다.
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/25_05_letuspeak_aitutor">
        <Card.Image src={team5} alt="프로젝트 LetuSpeak" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>LetuSpeak</Card.Title>
        <Card.Description>
          영어 회화 학습, 이대로 괜찮을까? AI가 도와드립니다.
        </Card.Description>
      </Card>

      <Card href="https://github.com/letusGo-Hack/25_03_Poojemi_naengteoldan">
        <Card.Image src={team3} alt="프로젝트 냉털단" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>냉털단</Card.Title>
        <Card.Description>
          냉장고에 남아있는 재료로 AI에게 레시피 추천을 받습니다
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/25_04_chad_pulsey">
        <Card.Image src={team4} alt="프로젝트 Pulsey" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>Pulsey</Card.Title>
        <Card.Description>
          당신의 건강을 코칭해드려요
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/25_06_Team6_OhUnWan">
        <Card.Image src={team6} alt="프로젝트 오운완" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>오운완</Card.Title>
        <Card.Description>
          OhUnWan(OhYakWan)은 사용자의 건강 데이터를 기반으로 개인화된 피드백을 제공하는 iOS 애플리케이션입니다
        </Card.Description>
      </Card>

      <Card href="https://github.com/letusGo-Hack/25_08_genz_eod">
        <Card.Image src={team8} alt="프로젝트 칼퇴요정" aspectRatio="16/9" />
        <Card.Year>2025</Card.Year>
        <Card.Title>칼퇴요정</Card.Title>
        <Card.Description>
          당신의 정시 퇴근을 도와드립니다.
        </Card.Description>
      </Card>
    </div>
  );
};

export default Projects2025;

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "3.2rem",
    width: "calc(100vw - 6.4rem)",
    maxWidth: "121.6rem",

    "@media (max-width: 1214px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      width: "calc(100vw - 4rem)",
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
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  cardContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "3.2rem",
    width: "calc(100vw - 6.4rem)",
    maxWidth: "121.6rem",

    "@media (max-width: 1214px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      width: "calc(100vw - 4rem)",
    },
  }),
};
