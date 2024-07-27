import PropTypes from "prop-types";
import styles from "./MemberProfile.module.css";

const MemberProfile = ({ image, name, title, description }) => {
  return (
    <>
      <div className={styles.teamMemberCardContainer}>
        <div className={styles.teamMemberCard}>
          <img src={image} alt={name} className={styles.teamMemberImage} />
          <div className={styles.teamMemberContent}>
            <h3 className={styles.teamMemberName}>{name}</h3>
            <h4 className={styles.teamMemberTitle}>{title}</h4>
            <p className={styles.teamMemberDescription}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

MemberProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MemberProfile;
