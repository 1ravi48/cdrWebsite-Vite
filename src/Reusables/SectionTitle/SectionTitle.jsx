import PropTypes from "prop-types";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title }) {
  return (
    <>
      <h2 className={styles.SectionTitle}>{title}</h2>
      <hr className={styles.TitleUnderline} />
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
