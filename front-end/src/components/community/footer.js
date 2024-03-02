import React from "react";

const Footer = ({ numSelected, totalCourses }) => {
  return (
    <footer className="footer">
      <p>
        {numSelected} of {totalCourses} selected
      </p>
    </footer>
  );
};

export default Footer;