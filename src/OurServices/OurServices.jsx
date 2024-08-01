import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
// import styles from "./OurServices.module.css";

export default function OurServices() {
  return (
    <>
      <section id="services">
        <SectionTitle title="Our Services" />
        <p>
          <b>Website Design:</b> Enhancing your website&apos;s visual appeal by
          carefully selecting colors, fonts, layouts, and images that align with
          your brand and resonate with your customers.
        </p>
        <p>
          <b>Responsive Design:</b> Ensuring your website adapts seamlessly to
          various screen sizes, guaranteeing optimal viewing and functionality
          across phones, tablets, laptops, and desktops.
        </p>
        <p>
          <b>Interactive Features:</b> Integrating engaging elements like
          animated menus, smooth scrolling, image sliders, and interactive forms
          to elevate user experience and captivate visitors.
        </p>
        <p>
          <b>Website Redesign:</b> Revitalising your existing website by
          revamping its visual aesthetics and functionality to attract new
          customers and enhance overall appeal.
        </p>

        <SemiCircle />
      </section>
    </>
  );
}
