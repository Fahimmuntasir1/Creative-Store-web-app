import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-5 mt-5">
      <small>
        &copy; All Right Reserved <span className="fs-4">Creative Store</span>{" "}
        {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
