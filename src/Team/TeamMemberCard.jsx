import PropTypes from "prop-types";
import styles from "./TeamMemberCard.module.css";

const TeamMemberCard = ({ image, name, title, description }) => {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.teamMemberImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.teamMemberContent}>
        <span className={styles.teamMemberTitle}>{title}</span>
        <h3 className={styles.teamMemberName}>{name}</h3>
        <p className={styles.teamMemberDescription}>{description}</p>
        <button className={styles.readMoreBtn}>View More</button>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TeamMemberCard;
