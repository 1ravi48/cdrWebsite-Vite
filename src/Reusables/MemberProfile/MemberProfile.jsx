import PropTypes from "prop-types";
import styles from "./MemberProfile.module.css";
import LinkedIn from "../../assets/icons/linkedin-icon.svg";
import GitHub from "../../assets/icons/github-icon.svg";
import Insta from "../../assets/icons/insta-icon.svg";
import Portfolio from "../../assets/icons/portfolio-icon.svg";

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
            <div className={styles.SocialsContainer}>
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className={styles.teamMemberSocialIcon}
              />
              <img
                src={GitHub}
                alt="GitHub"
                className={styles.teamMemberSocialIcon}
              />
              <img
                src={Insta}
                alt="Instagram"
                className={styles.teamMemberSocialIcon}
              />
              <img
                src={Portfolio}
                alt="Portfolio"
                className={styles.teamMemberSocialIcon}
              />
            </div>
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
