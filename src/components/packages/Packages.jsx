import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const PackagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1, h2 {
    color: #003366;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .packages-intro {
    background-color: #f5f9ff;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #003366;
    margin: 2rem 0;
  }
  
  .package-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .package-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .package-card:hover {
    transform: translateY(-5px);
  }
  
  .package-image {
    height: 200px;
    background-color: #003366;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .package-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .package-title {
    color: #003366;
    margin-bottom: 0.5rem;
  }
  
  .package-description {
    color: #666;
    margin-bottom: 1rem;
    flex-grow: 1;
  }
  
  .package-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .package-duration, .package-group {
    background-color: #f5f9ff;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #003366;
  }
  
  .package-price {
    font-weight: bold;
    color: #FFC107;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .package-button {
    background-color: #003366;
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #002244;
    }
  }
`

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

function Packages() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <PackagesContainer>
        <h1>Special Packages</h1>
        
        <div className="packages-intro">
          <p>Discover our carefully curated special packages designed to provide exceptional value and unforgettable experiences. Whether you're looking for a cruise adventure, a cultural expedition, or a relaxing beach getaway, our packages offer something for every traveler.</p>
        </div>
        
        <h2>Featured Travel Packages</h2>
        
        <div className="package-grid">
          <div className="package-card">
            <div className="package-image">Mediterranean Splendor</div>
            <div className="package-content">
              <h3 className="package-title">Mediterranean Cruise Package</h3>
              <p className="package-description">Experience the beauty of the Mediterranean Sea with stops in Italy, Greece, and Spain. This comprehensive package includes cruise accommodation, all meals onboard, and guided shore excursions.</p>
              <div className="package-details">
                <span className="package-duration">10 Days / 9 Nights</span>
                <span className="package-group">Max 30 People</span>
              </div>
              <p className="package-price">From RM 7,899 per person</p>
              <button className="package-button">View Details</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">Japan Explorer</div>
            <div className="package-content">
              <h3 className="package-title">Japan Cultural Tour</h3>
              <p className="package-description">Discover the rich cultural heritage of Japan with visits to Tokyo, Kyoto, and Osaka. Package includes accommodation, daily breakfast, guided tours, and bullet train tickets between cities.</p>
              <div className="package-details">
                <span className="package-duration">8 Days / 7 Nights</span>
                <span className="package-group">Max 15 People</span>
              </div>
              <p className="package-price">From RM 6,299 per person</p>
              <button className="package-button">View Details</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">Bali Tranquility</div>
            <div className="package-content">
              <h3 className="package-title">Bali Beach Resort Retreat</h3>
              <p className="package-description">Relax and rejuvenate in beautiful Bali with this luxury beach resort package. Includes beachfront villa accommodation, daily spa treatments, all meals, and airport transfers.</p>
              <div className="package-details">
                <span className="package-duration">7 Days / 6 Nights</span>
                <span className="package-group">Couples/Family</span>
              </div>
              <p className="package-price">From RM 4,599 per person</p>
              <button className="package-button">View Details</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">European Rivers</div>
            <div className="package-content">
              <h3 className="package-title">European River Cruise</h3>
              <p className="package-description">Cruise along Europe's picturesque waterways with this all-inclusive river cruise package. Visit charming towns and historic cities along the Rhine, Danube, or Seine rivers.</p>
              <div className="package-details">
                <span className="package-duration">12 Days / 11 Nights</span>
                <span className="package-group">Max 150 People</span>
              </div>
              <p className="package-price">From RM 8,999 per person</p>
              <button className="package-button">View Details</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">New Zealand Adventure</div>
            <div className="package-content">
              <h3 className="package-title">New Zealand Adventure Tour</h3>
              <p className="package-description">Experience the breathtaking landscapes of New Zealand with this adventure-filled package. Includes accommodation, guided hikes, adrenaline activities, and a scenic train journey.</p>
              <div className="package-details">
                <span className="package-duration">14 Days / 13 Nights</span>
                <span className="package-group">Max 12 People</span>
              </div>
              <p className="package-price">From RM 9,299 per person</p>
              <button className="package-button">View Details</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">Royal Caribbean</div>
            <div className="package-content">
              <h3 className="package-title">Caribbean Cruise Getaway</h3>
              <p className="package-description">Enjoy the crystal-clear waters and white sandy beaches of the Caribbean with this cruise package. Includes all onboard amenities, entertainment, and island excursions.</p>
              <div className="package-details">
                <span className="package-duration">7 Days / 6 Nights</span>
                <span className="package-group">Max 300 People</span>
              </div>
              <p className="package-price">From RM 5,599 per person</p>
              <button className="package-button">View Details</button>
            </div>
          </div>
        </div>
        
        <p style={{ marginTop: '2rem', textAlign: 'center' }}>Contact our travel consultants for more information about these packages or to create a custom travel experience.</p>
      </PackagesContainer>
    </motion.div>
  )
}

export default Packages
