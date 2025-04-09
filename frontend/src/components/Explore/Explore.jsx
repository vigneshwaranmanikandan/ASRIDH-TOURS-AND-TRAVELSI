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
      { name: 'Goa', image: exploreImg01, description: 'Where sun-kissed beaches, vibrant nightlife, and Portuguese charm await your soul.' },
      { name: 'Ooty', image: exploreImg02, description: 'The Queen of Hill Stations – a serene escape into rolling tea gardens and misty hills.' },
      { name: 'Kashmir', image: exploreImg03, description: 'Heaven on Earth – where snow-capped peaks and breathtaking valleys tell stories of peace and beauty.' }
    ],
    International: [
      { name: 'Srilanka', image: exploreImg04, description: 'An island of timeless wonders – golden beaches, ancient ruins, and lush greenery all in one journey.' },
      { name: 'Thailand', image: exploreImg05, description: 'The Land of Smiles – a vibrant blend of tropical beaches, rich culture, and exotic flavors.' },
      { name: 'Dubai', image: exploreImg06, description: 'A futuristic oasis – where luxury meets tradition in the heart of the desert skyline.' }
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
