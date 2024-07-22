import styles from "./OurTeam.module.css";
import TeamMemberCard from "../Team/TeamMemberCard";
import catherineImage from "../assets/images/catherine-small.png";
import davidImage from "../assets/images/david-small.jpg";
import raviImage from "../assets/images/ravi-small.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

const OurTeam = () => {
  const teamMembers = [
    {
      image: catherineImage,
      name: "Catherine Sarquís",
      title: "Software Developer",
      description:
        "Catherine is transitioning into software development, driven by her passion for detail and problem-solving. Catherine's experience in proofreading, digital editing, and love of languages bring a unique perspective to her work.",
    },
    {
      image: davidImage,
      name: "David A Silva",
      title: "Software Developer",
      description:
        "Passionate about creating software and web applications, David is transitioning from music to tech with determination and exploring creativity through code.",
    },
    {
      image: raviImage,
      name: "Ravi Kataria",
      title: "Software Developer",
      description:
        "Hi, I'm Ravi! I come from a background in education and am currently transitioning into technology. I love the problem-solving nature of the tech field and can't wait to use my knowledge to devise solutions!",
    },
  ];

  return (
    <>
      <section id="our-team" className={styles.ourTeam}>
        <h2>Meet our team</h2>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
          />
        ))}
      </section>
    </>
  );
};

export default OurTeam;
