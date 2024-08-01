import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
import styles from "./OurServices.module.css";
import aboutImage from "../assets/images/about_image.svg";

export default function OurServices() {
  return (
    <>
      <section id="services">
        <SectionTitle title="Our Services" />
        <h3>Website Design</h3>
        <p>
          Your website is your digital storefront. We create visually stunning
          designs that capture your brand&apos;s essence, using captivating
          colors, fonts, layouts, and imagery. Think of it as a complete
          makeover for your online image – we&apos;ll make your website
          irresistible!
        </p>

        <h3>Responsive Design</h3>
        <p>
          In today&apos;s mobile world, your website needs to adapt seamlessly
          to any device. Our responsive designs ensure that your site looks
          flawless and functions perfectly on smartphones, tablets, laptops, and
          desktops. This means your customers will have a smooth experience no
          matter how they access your site.
        </p>

        <h3>Interactive Features</h3>
        <p>
          Don&apos;t let your website be a boring brochure. We add dynamic
          elements like animated menus, smooth scrolling, image sliders, and
          interactive forms to make your website truly engaging. These features
          grab your visitors&apos; attention and keep them coming back for more.
        </p>

        <h3>Website Redesign</h3>
        <p>
          If your current website is outdated or underperforming, we&apos;ll
          give it a fresh new look and feel. Our redesign service revitalizes
          your brand&apos;s online presence, ensuring it stays relevant and
          appealing in today&apos;s competitive landscape.
        </p>

        <img
          src={aboutImage}
          className={styles.aboutImage}
          alt="Image by vectorjuice on Freepik"
        />
        <SemiCircle />
      </section>
    </>
  );
}
