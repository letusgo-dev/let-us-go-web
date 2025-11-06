import classNames from "classnames";
import { css } from "@styled-system/css";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Event = ({ children, className }: Props) => {
  return <div className={classNames(styles.event, className)}>{children}</div>;
};

export default Event;

const styles = {
  event: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.6rem",
    fontWeight: 400,
    backgroundColor: "background.300",
    borderRadius: "1.2rem",
    width: "100%",
    padding: "2rem",

    "& p": {
      fontSize: "3.6rem",
      fontWeight: 800
    },
    "& b": {
      fontWeight: 800
    },

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
      borderRadius: "0.8rem",
      marginBottom: "0.8rem",
      padding: "1rem",

      "& p": {
        fontSize: "1.3rem"
      }
    },
  }),
};
