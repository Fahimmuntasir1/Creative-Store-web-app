import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>services{services.length}</h2>
    </div>
  );
};

export default Services;
