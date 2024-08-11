import PropTypes from "prop-types";
import styles from "./ServicesCard.module.css";

const ServicesCard = ({ image, name, subtitle, description }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.servicesCard}>
          <img src={image} alt={name} className={styles.servicesImage} />
          <div>
            <p className={styles.descriptionText}>
              <span className={styles.subtitle}>{subtitle}&nbsp;</span>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textBg: PropTypes.string,
};

export default ServicesCard;
