import Form from "../Form/Form";
import Titel from "../Titel/Titel";
import ContactInfo from '../ContactInfo/ContactInfo'
import "./Contact.css";
import Iframe from "../Iframe/Iframe";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <Titel p={"CONTACT"} h2={"Get In Touch With Our Agents"} />
      </div>
      <div className="map">
        <div className="iframe">
          <Iframe/>
          <div className="info-c">
            <ContactInfo />
          </div>
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </section>
  );
}
