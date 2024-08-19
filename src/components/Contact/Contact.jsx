import Form from "../Form/Form";
import Titel from "../Titel/Titel";
import "./Contact.css";
import phone from '../../assets/Images/phone-icon.png'
import email from '../../assets/Images/email-icon.png'
export default function Contact() {
  const contactInfo = [
    {
      imgSrc: phone,
      link: "tel:010-020-0340",
      contact: "010-020-0340",
      text: "Phone Number",
    },
    {
      imgSrc: email,
      link: "mailto:info@villa.com",
      contact: "info@villa.com",
      text: "Business Email",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <Titel p={"CONTACT"} h2={"Get In Touch With Our Agents"} />
      </div>
      <div className="map">
        <div className="iframe">
          <iframe
            className='map-iframe'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191560.83606787832!2d1.9753765510959718!3d41.392807952893705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2snl!4v1724065370319!5m2!1sen!2snl"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="info-c">
            {contactInfo.map((item, index) => (
              <div key={index} className="cont-card">
                <img src={item.imgSrc} alt={item.text} />
                <div className="cont-card-text">
                  <a className="link-cont" href={item.link}>
                    {item.contact}
                  </a>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </section>
  );
}
