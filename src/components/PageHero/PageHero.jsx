import React from "react";
import "./PageHero.css";
import contactInfo from "../ContactInfo/ContactInfo";
function PageHero({ breadcrumb, heading }) {
  return (
    <section className="PageHero">
      <p className="titlePar">{breadcrumb}</p>
      <h3 className="heroPageTitle">{heading}</h3>
    </section>
  );
}

export default PageHero;
