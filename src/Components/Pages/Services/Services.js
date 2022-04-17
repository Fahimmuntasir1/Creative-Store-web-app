import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="services">
      <h2 className="my-4 fs-1">Services</h2>
      <div className="services-container row">
        {services.map((service) => (
          <Service key={service.id} services={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
