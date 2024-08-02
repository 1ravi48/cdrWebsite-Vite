"use client";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
import ServicesCard from "../Reusables/ServicesCard/ServicesCard.jsx";
import WebsiteDesign from "../assets/images/website_design.svg";
import ResponsiveDesign from "../assets/images/responsive_design.svg";
import InteractiveFeatures from "../assets/images/interactive_features.svg";
import WebsiteRedesign from "../assets/images/website_redesign.svg";

const OurServices = () => {
  const servicesProvided = [
    {
      image: WebsiteDesign,
      name: "Website Design",
      subtitle: "Website Design:",
      description:
        "Enhancing your website's visual appeal by carefully selecting colours, fonts, layouts, and images that align with your brand and resonate with your customers.",
      imgBg: "#5D6EE2",
      textBg: "#F1F2FF",
    },
    {
      image: ResponsiveDesign,
      name: "Responsive Design",
      subtitle: "Responsive Design:",
      description:
        "Ensuring your website adapts seamlessly to various screen sizes, guaranteeing optimal viewing and functionality across phones, tablets, laptops, and desktops.",
      imgBg: "#5CEDAC",
      textBg: "#F0FFF7",
    },
    {
      image: InteractiveFeatures,
      name: "Interactive Features",
      subtitle: "Interactive Features:",
      description:
        "Integrating engaging elements like animated menus, smooth scrolling, image sliders, and interactive forms to elevate user experience and captivate visitors.",
      imgBg: "#E466C9",
      textBg: "#FFF4F4",
    },
    {
      image: WebsiteRedesign,
      name: "Website Redesign",
      subtitle: "Website Redesign:",
      description:
        "Revitalising your existing website by revamping its visual aesthetics and functionality to attract new customers and enhance overall appeal.",
      imgBg: "#FFC444",
      textBg: "#FFFDCB",
    },
  ];

  return (
    <section id="services">
      <SectionTitle title="Our Services" />
      <div className="services-container">
        {servicesProvided.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            name={service.name}
            subtitle={service.subtitle}
            description={service.description}
            imgBg={service.imgBg}
            textBg={service.textBg}
          />
        ))}
      </div>
      <SemiCircle />
    </section>
  );
};

export default OurServices;
