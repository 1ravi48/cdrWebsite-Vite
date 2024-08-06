import PropTypes from "prop-types";
import styles from "./MemberProfile.module.css";
import LinkedIn from "../../assets/icons/linkedin-icon.svg";
import GitHub from "../../assets/icons/github-icon.svg";
import Insta from "../../assets/icons/insta-icon.svg";
import Portfolio from "../../assets/icons/portfolio-icon.svg";

const MemberProfile = ({
  image,
  name,
  title,
  description,
  linkedIn,
  github,
  instagram,
  portfolio,
}) => {
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
              {linkedIn && (
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className={styles.teamMemberSocialIcon}
                  />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <img
                    src={GitHub}
                    alt="GitHub"
                    className={styles.teamMemberSocialIcon}
                  />
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Insta}
                    alt="Instagram"
                    className={styles.teamMemberSocialIcon}
                  />
                </a>
              )}
              {portfolio && (
                <a href={portfolio} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Portfolio}
                    alt="Portfolio"
                    className={styles.teamMemberSocialIcon}
                  />
                </a>
              )}
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
  linkedIn: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
  portfolio: PropTypes.string,
};

export default MemberProfile;
