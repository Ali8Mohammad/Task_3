import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Properties from '../../components/Properties/Properties';
import { cardData } from '../../data/propData';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import './PropertiesPage.css';
import PageHero from '../../components/PageHero/PageHero';

function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(cardData);

  const filterProperties = (type) => {
    if (type === 'All') {
      setFilteredProperties(cardData);
    } else {
      const filtered = cardData.filter(property => property.type === type);
      setFilteredProperties(filtered);
    }
  };

  return (
    <Layout>
       <PageHero breadcrumb="HOME / PROPERTIES" heading="PROPERTIES" />
      <Properties 
        properties={filteredProperties}
      >
        <FilterButtons onFilter={filterProperties} /> 
      </Properties>
    </Layout>
  );
}

export default PropertiesPage;
