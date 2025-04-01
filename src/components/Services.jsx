import React from "react";
import { FaCode, FaPalette, FaSearch, FaBullhorn, FaMobile, FaLaptopCode } from "react-icons/fa";
import "../styles/style.css"; // Ensure the styles are applied globally

const services = [
  { icon: <FaLaptopCode />, title: "Web Development", description: "Creating modern and responsive websites." },
  { icon: <FaPalette />, title: "UI/UX Design", description: "Designing intuitive and engaging user interfaces." },
  { icon: <FaSearch />, title: "SEO Optimization", description: "Improving website visibility on search engines." },
  { icon: <FaCode />, title: "Frontend Development", description: "Building interactive and dynamic web applications." },
  { icon: <FaMobile />, title: "Mobile Development", description: "Developing mobile-friendly applications." },
  { icon: <FaBullhorn />, title: "Digital Marketing", description: "Boosting online presence with strategic marketing." },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-box" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
