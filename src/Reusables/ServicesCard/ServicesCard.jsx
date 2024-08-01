import PropTypes from "prop-types";
import styles from "./ServicesCard.module.css";

const ServicesCard = ({
  image,
  name,
  subtitle,
  description,
  imgBg,
  textBg,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer} style={{ backgroundColor: imgBg }}>
        <img src={image} alt={name} className={styles.servicesImage} />
      </div>
      <div
        className={styles.descriptionContainer}
        style={{ backgroundColor: textBg }}
      >
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgBg: PropTypes.string,
  textBg: PropTypes.string,
};

export default ServicesCard;
