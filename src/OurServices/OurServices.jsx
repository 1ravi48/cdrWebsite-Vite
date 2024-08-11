"use client";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
import ServicesCard from "../Reusables/ServicesCard/ServicesCard.jsx";
import WebsiteDesign from "../assets/images/website_design.svg";
import ResponsiveDesign from "../assets/images/responsive_design.svg";
import InteractiveFeatures from "../assets/images/interactive_features.svg";
import WebsiteRedesign from "../assets/images/website_redesign.svg";
import styles from "./OurServices.module.css";

const OurServices = () => {
  const servicesProvided = [
    {
      image: WebsiteDesign,
      name: "Website Design",
      subtitle: "Website Design:",
      description:
        "Enhancing your website's visual appeal by carefully selecting colours, fonts, layouts, and images that align with your brand and resonate with your customers.",
    },
    {
      image: ResponsiveDesign,
      name: "Responsive Design",
      subtitle: "Responsive Design:",
      description:
        "Ensuring your website adapts seamlessly to various screen sizes, guaranteeing optimal viewing and functionality across phones, tablets, laptops, and desktops.",
    },
    {
      image: InteractiveFeatures,
      name: "Int.Features",
      subtitle: "Interactive Features:",
      description:
        "Integrating engaging elements like animated menus, smooth scrolling, image sliders, and interactive forms to elevate user experience and captivate visitors.",
    },
    {
      image: WebsiteRedesign,
      name: "Website Redesign",
      subtitle: "Website Redesign:",
      description:
        "Revitalising your existing website by revamping its visual aesthetics and functionality to attract new customers and enhance overall appeal.",
    },
  ];

  return (
    <section id="services">
      <SectionTitle title="Our Services" />
      <div className={styles.servicesTextContainer}>
        <p>First impressions matter.</p>
        <p>
          Your website is your 24/7 brand ambassador. But we know that building
          a captivating website from scratch can feel overwhelming, especially
          when you&apos;re juggling everything else that comes with launching a
          new business.
        </p>
        <p>That&apos;s where we come in.</p>
        <p>
          We&apos;re your partners in creating a powerful online presence that
          reflects your unique brand and helps you achieve your goals.
        </p>
      </div>
      <div className={styles.servicesContainer}>
        {servicesProvided.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            name={service.name}
            subtitle={service.subtitle}
            description={service.description}
          />
        ))}
      </div>
      <SemiCircle />
    </section>
  );
};

export default OurServices;
