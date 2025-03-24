import { css } from "@styled-system/css";
import { useRef } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Banner from "./components/Banner";
import Invitation from "./components/Invitation";
import Speakers from "./components/Speakers";
import Timetable from "./components/Timetable";
import Sponsors from "./components/Sponsors";
import Committees from "./components/Committees";
import Location from "./components/Location";
import Contact from "./components/Contact";
import LastEvent from "./components/LastEvent";
import Footer from "./components/Footer";

const App = () => {
  const timetableRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const committeesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    section: "timetable" | "speakers" | "location" | "sponsors" | "committees" | "contact",
  ) => {
    const sectionRef = {
      timetable: timetableRef,
      speakers: speakersRef,
      location: locationRef,
      sponsors: sponsorsRef,
      committees: committeesRef,
      contact: contactRef,
    }[section];

    if (sectionRef?.current) {
      const yOffset = -80;
      const element = sectionRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <Header onScrollToSection={scrollToSection} />
        <Title />
        <Banner />
        <div className={styles.contentContainer}>
          <Invitation />
          <Speakers ref={speakersRef} />
          <Timetable ref={timetableRef} />
          <Sponsors ref={sponsorsRef} />
          <Location ref={locationRef} />
          <Committees ref={committeesRef} />
          <Contact ref={contactRef} />
        </div>
        <LastEvent />
        <Footer />
      </div>
    </div>
  );
};

export default App;

const styles = {
  container: css({
    height: "100vh",
  }),
  centered: css({
    margin: "0 auto",
  }),
  contentContainer: css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  }),
};
