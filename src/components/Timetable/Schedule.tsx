import classNames from "classnames";
import { css } from "@styled-system/css";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Schedule = ({ children, className }: Props) => {
  return <div className={classNames(styles.schedule, className)}>{children}</div>;
};

export default Schedule;

const styles = {
  schedule: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "7.3rem",

    fontSize: "3.6rem",
    fontWeight: 800,
    backgroundColor: "background.300",
    borderRadius: "1.2rem",
    minHeight: "7.3rem",
    marginBottom: "2rem",

    "@media (max-width: 768px)": {
      height: "4rem",
      minHeight: "4rem",
      fontSize: "1.5rem",
      borderRadius: "0.8rem",
      marginBottom: "0.8rem",
    },
  }),
};
