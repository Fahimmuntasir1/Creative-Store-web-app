import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ services }) => {
  const { id, name, img, description, price } = services;
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="product" />
      <div className="service-details">
        <h2>{name}</h2>
        <p className="fw-bold fs-5">Price:{price}</p>
        <p>
          <small>{description}</small>
        </p>
      </div>
      <div>
        <button onClick={() => handleBooking(id)}>Checkout Now</button>
      </div>
    </div>
  );
};

export default Service;
