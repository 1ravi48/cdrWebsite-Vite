import styles from "./Contact.module.css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle";
import contactImage from "../assets/images/contact-image.svg";

function Contact() {
  return (
    <>
      <section id="contact">
        <SectionTitle title="Contact Us" />
        <div className={styles.contactContainer}>
          <div className={styles.contactLeft}>
            <p>Ready to elevate your business?</p>
            <p>
              We are here to help! Reach out today to discuss how we can make
              your online presence shine. We&apos;re excited to hear your ideas
              and achieve your goals together!
            </p>
            <img
              src={contactImage}
              alt="Contact Us"
              className={styles.contactImage}
            />
          </div>
          <div className={styles.SectionFormContainer}>
            <div className={styles.formContainer}>
              <form action="https://formspree.io/f/xnnadpye" method="post">
                <div className={styles.formGroup} id={styles.name}>
                  <label htmlFor="name">Name</label>

                  <input type="text" name="name" id="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>

                  <input type="text" name="email" id="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>

                  <textarea name="message" id="message" required></textarea>
                </div>

                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
        <SemiCircle />
      </section>
    </>
  );
}

export default Contact;
