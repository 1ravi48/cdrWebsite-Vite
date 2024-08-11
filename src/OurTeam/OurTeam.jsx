import { useState, useEffect } from "react";
import styles from "./OurTeam.module.css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
import MemberProfile from "../Reusables/MemberProfile/MemberProfile.jsx";
import catherineImage from "../assets/images/catherine-small.png";
import davidImage from "../assets/images/david-small.jpg";
import raviImage from "../assets/images/ravi-small.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // Import Navigation module

const OurTeam = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const teamMembers = [
    {
      image: catherineImage,
      name: "Catherine Sarquís",
      title: "Software Developer",
      description:
        "Hej! Jeg er Catherine. I love languages (all kinds) and I enjoy transforming ideas into code. I'm excited to use my interests to make a difference by improving lives through technology.",
      linkedIn: "https://www.linkedin.com/in/sarquis",
      twitter: "https://x.com/catherineSrqs",
      portfolio: "https://catherinesarquis.com",
    },
    {
      image: davidImage,
      name: "David A Silva",
      title: "Software Developer",
      description:
        "Hi, I'm David. Driven by a passion to create, I've transitioned from music to tech. I'm dedicated to building software and web applications that push the boundaries of digital creativity.",
      linkedIn: "https://www.linkedin.com/in/davidadamsilva",
      twitter: "https://x.com/davidadam1323",
      portfolio: "https://das-dev-project.vercel.app/#home",
    },
    {
      image: raviImage,
      name: "Ravi Kataria",
      title: "Software Developer",
      description:
        "Hi, I'm Ravi! With a strong foundation in education, I've honed my ability to break down complex problems. I'm eager to contribute my skills to building innovative products that leave a lasting impact.",
      linkedIn: "https://www.linkedin.com/in/ravi-kataria-1617162b1",
      github: "https://github.com/1ravi48",
    },
  ];

  return (
    <>
      <section id="team">
        <SectionTitle title="Our Team" />
        <div className={styles.OurTeamSectionContainer}>
          <Swiper
            pagination={{ clickable: true }}
            modules={[
              Pagination,
              Autoplay,
              ...(isLargeScreen ? [Navigation] : []),
            ]} // Conditionally add Navigation module
            autoplay={{ delay: 7000 }}
            navigation={isLargeScreen} // Conditionally enable navigation
            className={styles.teamSlider}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <MemberProfile
                  image={member.image}
                  name={member.name}
                  title={member.title}
                  description={member.description}
                  linkedIn={member.linkedIn}
                  github={member.github}
                  twitter={member.twitter}
                  portfolio={member.portfolio}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.circleWrapper}>
          <SemiCircle className={styles.circleRight} />
        </div>
      </section>
    </>
  );
};

export default OurTeam;
