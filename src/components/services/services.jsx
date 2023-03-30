import React from "react";
import { FaLeaf, FaSnowflake, FaCut } from "react-icons/fa";
import "./services.css";

const Services = () => {
  const serviceData = [
    {
      name: "Mowing",
      description: "Have your lawn expertly manicured by our reliable landscaping team.",
      icon: <FaCut className="cut"/>,
    },
    {
      name: "Leaf Cleanup",
      description: "In the Fall our leaf cleanup will keep your lawn looking tidy and healthy all year round.",
      icon: <FaLeaf className="leaf" />,
    },
    {
      name: "Snow Removal",
      description: "Our snow removal service will keep your drivewas and walkways safe and clear.",
      icon: <FaSnowflake className="snow" />,
    },
  ];

  return (
    <div id="Services" className="services-container container">
      <h2>Services</h2>
      <p></p>
      <div className="service-items">
        {serviceData.map((service) => (
          <div className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;