import React from 'react';
import PropertyCard from '../ProoertyCard/PropertyCard';
import Titel from '../Titel/Titel';
import './Properties.css';

export default function Properties({ title, children, properties }) { 
  return (
    <section className='prop' id='properties'>
      <div className='prop-title'>
        <Titel p={'PROPERTIES'} h2={title} />
      </div>
      <div className='filter-section'>
        {children} 
      </div>
      <div className='cards'>
        <PropertyCard properties={properties} />
      </div>
    </section>
  );
}
