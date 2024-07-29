import styles from "./SemiCircle.module.css";

const SemiCircle = () => {
  return (
    <svg
      className={styles.semiCircle}
      viewBox="-1 -1 74 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 36 A36 36 0 0 1 72 36 Z" fill="url(#paint0_linear_214_647)" />
      <defs>
        <linearGradient
          id="paint0_linear_214_647"
          x1="72"
          y1="0"
          x2="0"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F76680" />
          <stop offset="1" stopColor="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SemiCircle;
