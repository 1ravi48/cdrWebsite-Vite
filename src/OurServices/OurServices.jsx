import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
import ServicesCard from "../Reusables/ServicesCard/ServicesCard.jsx";

const OurServices = () => {
  const servicesProvided = [
    {
      image: "",
      name: "Website Design",
      subtitle: "Website Design:",
      description:
        "Enhancing your website's visual appeal by carefully selecting colours, fonts, layouts, and images that align with your brand and resonate with your customers.",
      imgBg: "#f0f0f0",
      textBg: "#ffffff",
    },
    {
      image: "",
      name: "Responsive Design",
      subtitle: "Responsive Design:",
      description:
        "Ensuring your website adapts seamlessly to various screen sizes, guaranteeing optimal viewing and functionality across phones, tablets, laptops, and desktops.",
      imgBg: "#f0f0f0",
      textBg: "#ffffff",
    },
    {
      image: "",
      name: "Interactive Features",
      subtitle: "Interactive Features:",
      description:
        "Integrating engaging elements like animated menus, smooth scrolling, image sliders, and interactive forms to elevate user experience and captivate visitors.",
      imgBg: "#f0f0f0",
      textBg: "#ffffff",
    },
    {
      image: "",
      name: "Website Redesign",
      subtitle: "Website Redesign:",
      description:
        "Revitalising your existing website by revamping its visual aesthetics and functionality to attract new customers and enhance overall appeal.",
      imgBg: "#f0f0f0",
      textBg: "#ffffff",
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
