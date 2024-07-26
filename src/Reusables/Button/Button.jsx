import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ btnText }) => {
  return (
    <>
      <button className={styles.btn}>{btnText}</button>
    </>
  );
};
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default Button;
