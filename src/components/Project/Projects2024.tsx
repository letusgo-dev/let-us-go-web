import { css } from "@styled-system/css";
import Card from "./Card";
import visionDeskImage from "@/assets/images/hackathon/2024/visionDesk.png";
import toimerImage from "@/assets/images/hackathon/2024/toimer.png";
import emotionalystImage from "@/assets/images/hackathon/2024/emotionalyst.png";
import ttogiokImage from "@/assets/images/hackathon/2024/ttogiok.png";
import oneLineDiaryImage from "@/assets/images/hackathon/2024/oneLineDiary.png";
import saveUsImage from "@/assets/images/hackathon/2024/saveUs.png";
import roadKillImage from "@/assets/images/hackathon/2024/roadKill.png";
import tripLoggerImage from "@/assets/images/hackathon/2024/tripLogger.png";
import meokcipyImage from "@/assets/images/hackathon/2024/meokcipy.png";

const Projects2024 = () => {
  return (
    <div className={styles.cardContainer}>
      <Card href="https://github.com/letusGo-Hack/Team_6_HomP_XR_Mini">
        <Card.Image src={visionDeskImage} alt="프로젝트 vision desk" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Vision Desk</Card.Title>
        <Card.Description>
          Vision Pro를 통해 가상 공간에서 책상 위 작업대를 재현합니다.
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_5_Tomato">
        <Card.Image src={toimerImage} alt="프로젝트 토이머" />
        <Card.Year>2024</Card.Year>
        <Card.Title>토이머</Card.Title>
        <Card.Description>
          Control API를 이용한 시간 관리 앱
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_7_Emotionalyst">
        <Card.Image src={emotionalystImage} alt="프로젝트 emotionalyst" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Emotionalyst</Card.Title>
        <Card.Description>
          RealityKit을 활용하여 모든 사물을 지도에 기록하는 서비스
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_9_TToGiOk">
        <Card.Image src={ttogiokImage} alt="프로젝트 또기옥" />
        <Card.Year>2024</Card.Year>
        <Card.Title>또기옥</Card.Title>
        <Card.Description>
          그 동안 로또에 당첨되지 못한 이유, 어쩌면 정성이 부족해서 그렇진 않았을까요?
          정성으로 뽑는 랜덤 로또 번호 생성기, 또기옥!
        </Card.Description>
      </Card>

      <Card href="https://github.com/letusGo-Hack/Team_1_Banana">
        <Card.Image src={oneLineDiaryImage} alt="프로젝트 한 줄 일기" />
        <Card.Year>2024</Card.Year>
        <Card.Title>한 줄 일기</Card.Title>
        <Card.Description>
          ControlWidget에 자연어 처리를 통하여 나의 감정을 기록하는 앱
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_2_SaveUs">
        <Card.Image src={saveUsImage} alt="프로젝트 save us" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Save us</Card.Title>
        <Card.Description>
          WeatherKit을 활용하여 과거-현재 데이터로 지구 온난화의 심각도를 시각화
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_3_Roadkill">
        <Card.Image src={roadKillImage} alt="프로젝트 로드킬" />
        <Card.Year>2024</Card.Year>
        <Card.Title>로드킬</Card.Title>
        <Card.Description>AppIntents와 CoreML을 활용하여 복잡했던 로드킬 신고를 간편하게! </Card.Description>
      </Card>

      <Card href="https://github.com/letusGo-Hack/Team_4_TripLogger">
        <Card.Image src={tripLoggerImage} alt="프로젝트 trip logger" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Trip Logger</Card.Title>
        <Card.Description>
          WeatherKit, SwiftData, Translation API를 사용한 여행 기록을 쉽게 도와주는 앱
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_8_Meok-Kkae-Bi">
        <Card.Image src={meokcipyImage} alt="프로젝트 먹시피" />
        <Card.Year>2024</Card.Year>
        <Card.Title>먹시피</Card.Title>
        <Card.Description>
          Live Activity를 활용하여 애플워치로 요리 레시피를 보며 편하게 요리하자!
        </Card.Description>
      </Card>
    </div>
  );
};

export default Projects2024;

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
