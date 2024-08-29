import phone from '../../assets/Images/phone-icon.png'
import email from '../../assets/Images/email-icon.png'
import React from 'react'

function ContactInfo() {
    const contactInfo = [ {
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
    <>
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
      </>
  )
}

export default ContactInfo
