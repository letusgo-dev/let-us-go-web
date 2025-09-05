import { forwardRef } from "react";
import { css } from "@styled-system/css";
import ProfileCard from "./ProfileCard";
import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
// import commingsoonImage from "@/assets/svgs/logo_filled.svg";


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
