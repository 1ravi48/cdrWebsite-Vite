import styles from "./Contact.module.css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle";
import Button from "../Reusables/Button/Button";

function Contact() {
  return (
    <>
      <section id="contact">
        <SectionTitle title="Contact Us" />
        <p>Ready to elevate your business?</p>
        <p>
          We are here to help! Reach out today to discuss how we can make your
          online presence shine. We are excited to hear your ideas and achieve
          your goals together!
        </p>
        <div className={styles.SectionFormContainer}>
          <div className={styles.formContainer}>
            <form action="https://formspree.io/f/xnnadpye" method="post">
              <div className={styles.formGroup}>
                <label htmlFor="name">🙎🏻‍♂️ Name</label>
                <div className={styles.gradientBg}>
                  <input type="text" name="name" id="name" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">📧 Email</label>
                <div className={styles.gradientBg}>
                  <input type="text" name="email" id="email" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">💭 Message</label>
                <div className={styles.gradientBgText}>
                  <textarea name="message" id="message" required></textarea>
                </div>
              </div>
              <div className={styles.formBtnContainer}>
                <input className="hover btn" type="submit" value="Submit" />
                <Button btnText="Submit 📩" />
              </div>
            </form>
          </div>
        </div>
        <SemiCircle />
      </section>
    </>
  );
}

export default Contact;
