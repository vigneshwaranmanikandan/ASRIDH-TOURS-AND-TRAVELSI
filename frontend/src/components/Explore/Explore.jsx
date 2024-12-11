import React, { useState } from 'react';
import './Explore.css';
import exploreImg01 from '../../assets/images/exploreImage01.jpg';
import exploreImg02 from '../../assets/images/exploreImage02.jpg';
import exploreImg03 from '../../assets/images/exploreImage03.jpg';
import exploreImg04 from '../../assets/images/exploreImage04.jpg';
import exploreImg05 from '../../assets/images/exploreImage05.jpg';
import exploreImg06 from '../../assets/images/exploreImage06.jpg';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('India');

  const places = {
    India: [
      { name: 'Taj Mahal, Agra', image: exploreImg01, description: 'Symbol of love and a UNESCO World Heritage Site.' },
      { name: 'Jaipur, Rajasthan', image: exploreImg02, description: 'The Pink City known for its historic forts and palaces.' },
      { name: 'Kerala Backwaters', image: exploreImg03, description: 'A serene network of lakes, rivers, and canals.' }
    ],
    International: [
      { name: 'Eiffel Tower, Paris', image: exploreImg04, description: 'Iconic symbol of France and a romantic destination.' },
      { name: 'Great Wall of China', image: exploreImg05, description: 'A monumental structure and wonder of the world.' },
      { name: 'Sydney Opera House, Australia', image: exploreImg06, description: 'An architectural marvel and cultural hub.' }
    ]
  };

  return (
    <div className="explore-container">
      <h1 className="explore-title">Discover Your Next Destination</h1>
      <div className="button-group">
        {Object.keys(places).map((category) => (
          <button
            key={category}
            className={`explore-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="places-grid">
        {places[selectedCategory].map((place, index) => (
          <div key={index} className="place-card">
            <div className="image-container">
              <img src={place.image} alt={place.name} className="place-image" />
              <div className="image-overlay">
                <p className="overlay-text">Explore Now</p>
              </div>
            </div>
            <div className="place-details">
              <h2 className="place-name">{place.name}</h2>
              <p className="place-description">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
