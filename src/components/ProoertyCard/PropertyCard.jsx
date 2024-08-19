import './PropertyCard.css'; 
import { cardData } from '../../data/propData';
import BtnCard from '../BtnCard/BtnCard';

const PropertyDetail = ({ label, value }) => (
  <p>{label}: <span>{value}</span></p>
);

export default function PropertyCard() {
  return (
    <>
      {cardData.map((item) => (
        <div key={item.id} className='card'>
          <img src={item.img} alt={item.title} />
          <div className='price'>
            <p className='type'>{item.type}</p>
            <p className='price-c'>{item.price}</p>
          </div>
          <h3 className='title'>{item.title}</h3>
          <div className='info-p'>
            <PropertyDetail label="Bedrooms" value={item.Bed} />
            <PropertyDetail label="Bathrooms" value={item.Bath} />
            <PropertyDetail label="Area" value={item.Area} />
            <PropertyDetail label="Floor" value={item.floor} />
            <PropertyDetail label="Parking" value={item.parking} />
          </div>
          <div className='card-btn'>
            <BtnCard text={'Schedule a visit'} />
          </div>
        </div>
      ))}
    </>
  );
}
