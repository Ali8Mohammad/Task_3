import React, { useState } from 'react';
import './FilterButtons.css';

export default function FilterButtons({ onFilter }) {
  const [activeButton, setActiveButton] = useState('All'); 

  const handleFilterClick = (filterType) => {
    setActiveButton(filterType);
    onFilter(filterType); 
  };

  return (
    <div className='filter-buttons'>
      <button 
        className={`filterButton ${activeButton === 'All' ? 'active' : ''}`} 
        onClick={() => handleFilterClick('All')}
      >
        Show All
      </button>
      <button 
        className={`filterButton ${activeButton === 'Apartment' ? 'active' : ''}`} 
        onClick={() => handleFilterClick('Apartment')}
      >
        Apartment
      </button>
      <button 
        className={`filterButton ${activeButton === 'Luxury Villa' ? 'active' : ''}`} 
        onClick={() => handleFilterClick('Luxury Villa')}
      >
        Villa House
      </button>
      <button 
        className={`filterButton ${activeButton === 'Penthouse' ? 'active' : ''}`} 
        onClick={() => handleFilterClick('Penthouse')}
      >
        PentHouse
      </button>
    </div>
  );
}
