import React from 'react';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import Featured from '../../components/Featured/Featured';
import ViewSection from '../../components/ViewSection/ViewSection';
import OrangCard from '../../components/OrangCard/OrangCard';
import Best from '../../components/Best/Best';
import Properties from '../../components/Properties/Properties';
import Contact from '../../components/Contact/Contact';
import '../../App.css';
import { cardData } from '../../data/propData';

function Home() {
  const sixProperties = cardData.slice(0, 6);

  return (
    <Layout>
      <Hero />
      <Featured />
      <ViewSection />
      <OrangCard />
      <Best />
      <Properties 
        title={'We Provide The Best Property You Like'} 
        properties={sixProperties}
      >
      </Properties>
      <Contact page='Home'/>
    </Layout>
  );
}

export default Home;
