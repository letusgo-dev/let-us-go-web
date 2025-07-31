import { ReactNode, useEffect, useRef, useState } from "react";
import { css } from "@styled-system/css";
import ArrowDownSvg from "@/assets/svgs/arrow-down.svg?react";
import ArrowUpSvg from "@/assets/svgs/arrow-up.svg?react";

interface Props {
  year: ReactNode;
  projects: ReactNode;
}

const ToggleProjects = ({ year, projects }: Props) => {
  const [isProjectsOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const toggleProjects = () => {
    setIsOpen(!isProjectsOpen);
  };

  useEffect(() => {
    if (answerRef.current) {
      if (isProjectsOpen) {
        answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
      } else {
        answerRef.current.style.maxHeight = "0px";
      }
    }
  }, [isProjectsOpen]);

  return (
    <li className={styles.yearList}>
      <div className={styles.year(isProjectsOpen)} onClick={toggleProjects}>
        <div>
          <span className={styles.yearQ(isProjectsOpen)}></span>
          <span>{year}</span>
        </div>
        {isProjectsOpen ? (
          <ArrowUpSvg className={styles.icon} />
        ) : (
          <ArrowDownSvg className={styles.icon} />
        )}
      </div>
      <div ref={answerRef} className={styles.projectsWrapper}>
        <div className={styles.projects}>{projects}</div>
      </div>
    </li>
  );
};

export default ToggleProjects;

const styles = {
  yearList: css({
    listStyle: "none",
    marginBottom: "3.2rem",

    "@media (max-width: 768px)": {
      marginBottom: "1.2rem",
    },
  }),
  year: (isAnswerOpen: boolean) =>
    css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "9.1rem",
      fontSize: "3.6rem",
      fontWeight: isAnswerOpen ? "600" : "400",
      backgroundColor: isAnswerOpen ? "summer" : "background.300",
      color: isAnswerOpen ? "background.500" : "inherit",
      paddingX: "3.2rem",
      borderRadius: "1.2rem",
      cursor: "pointer",

      "@media (max-width: 768px)": {
        height: "4.1rem",
        fontSize: "1.4rem",
        paddingX: "1.6rem",
      },
    }),
  yearQ: (isAnswerOpen: boolean) =>
    css({
      color: isAnswerOpen ? "background.500" : "summer",
      marginRight: "2.4rem",

      "@media (max-width: 768px)": {
        marginRight: "0.8rem",
      },
    }),
  projectsWrapper: css({
    maxHeight: "100vh",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  }),
  projects: css({
    padding: "4rem 3.2rem",
    fontSize: "2.8rem",

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
      padding: "1.2rem 1.6rem",
    },
  }),
  icon: css({
    width: "3.2rem",
    height: "3.2rem",

    "@media (max-width: 768px)": {
      width: "1.6rem",
      height: "1.6rem",
    },
  }),
};
