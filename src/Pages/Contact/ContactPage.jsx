import './ContactPage.css'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageHero from '../../components/PageHero/PageHero'
import Title from '../../components/Titel/Titel'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Form from '../../components/Form/Form'
import Iframe from '../../components/Iframe/Iframe'

function ContactPage() {
  const parContact = 'When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our Website. If you need more information, please contact us'
  return (
    <Layout>
      <PageHero breadcrumb='HOME / CONTACT US' heading='CONTACT US'/>
      <section className='ContactMainSection'>
        <div className='connectSide'>
        <Title h2="Get In Touch With Our Agents" p="CONTACT US"/>
        <p className='parContact'>{parContact}</p>
        <div className='ContactPageInfo'>
          <ContactInfo/>
        </div>
        </div>
        <div className='formSide'>
          <Form/>
        </div>
        <div className='ContactPageMap'>
          <Iframe/>
        </div>
      </section>
    </Layout>
  )
}
    
export default ContactPage