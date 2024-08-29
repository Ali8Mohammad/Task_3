import './PropertyDetails.css';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import ServesList from '../../components/ServesList/ServesList';
import property_1 from '../../assets/Images/property-01.jpg';
import { cardData } from '../../data/propData';
import PageHero from '../../components/PageHero/PageHero';
import Accordion from '../../components/Accordion/Accordion';
import Best from '../../components/Best/Best';

function PropertyDetails() {
  const firstProperty = cardData.length > 0 ? cardData[8] : null;

  if (!firstProperty) {
    return <div>No property data available.</div>;
  }

  return (
    <Layout>
      <PageHero breadcrumb="HOME / SINGLE PROPERTY" heading="SINGLE PROPERTY" />
      <section className='detailsSection'>
        <div className='apparmentinfosec'>
          <img src={firstProperty.img} alt={firstProperty.title} />
          <p className='type'>{firstProperty.type}</p>
          <h3>{firstProperty.title}</h3>
        </div>
        <ServesList page={true} />
      
      <div className='secSectionDetails'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className='blueText'>Deserunt, veniam itaque optio aliquid, nobis natus voluptates nam odio hic saepe provident</span> dolore assumenda corporis perferendis consequatur modi aliquam maiores harum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat optio eos architecto cupiditate, assumenda natus ut perspiciatis esse similique, quod dolor tempore perferendis omnis magni dolorem ea cumque consequatur?</p>
        <Accordion/>
      </div>
      </section>
        <Best />
    </Layout>
  );
}

export default PropertyDetails;
