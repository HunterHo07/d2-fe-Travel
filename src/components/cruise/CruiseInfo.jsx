import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const CruiseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    color: #003366;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .cruise-highlight {
    background-color: #f5f9ff;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #003366;
    margin: 2rem 0;
  }
  
  .cruise-options {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .cruise-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .cruise-card:hover {
    transform: translateY(-5px);
  }
  
  .cruise-image {
    height: 200px;
    background-color: #003366;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .cruise-content {
    padding: 1.5rem;
  }
  
  .cruise-title {
    color: #003366;
    margin-bottom: 0.5rem;
  }
  
  .cruise-description {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .cruise-price {
    font-weight: bold;
    color: #FFC107;
    font-size: 1.2rem;
  }
`

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

function CruiseInfo() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <CruiseContainer>
        <h1>Cruise Information</h1>
        
        <div className="cruise-highlight">
          <p>Experience the luxury and adventure of modern cruising with Jebsen Travel & Tours. We offer a wide selection of cruise packages to destinations around the world. Whether you're looking for a romantic getaway, a family vacation, or an adventure with friends, we have the perfect cruise for you.</p>
        </div>
        
        <p>At Jebsen Travel & Tours, we partner with the world's leading cruise lines to bring you exceptional experiences at sea. Our cruise packages are designed to cater to different preferences, budgets, and durations, ensuring that you find the perfect match for your travel desires.</p>
        
        <div className="cruise-options">
          <div className="cruise-card">
            <div className="cruise-image">Caribbean Cruise</div>
            <div className="cruise-content">
              <h3 className="cruise-title">Caribbean Paradise</h3>
              <p className="cruise-description">7-day cruise exploring the beautiful islands of the Caribbean, with stops in Jamaica, Bahamas, and Mexico.</p>
              <p className="cruise-price">From RM 5,999 per person</p>
            </div>
          </div>
          
          <div className="cruise-card">
            <div className="cruise-image">Mediterranean Cruise</div>
            <div className="cruise-content">
              <h3 className="cruise-title">Mediterranean Explorer</h3>
              <p className="cruise-description">10-day cruise visiting iconic Mediterranean destinations including Barcelona, Rome, and Athens.</p>
              <p className="cruise-price">From RM 7,899 per person</p>
            </div>
          </div>
          
          <div className="cruise-card">
            <div className="cruise-image">Alaska Cruise</div>
            <div className="cruise-content">
              <h3 className="cruise-title">Alaskan Adventure</h3>
              <p className="cruise-description">8-day cruise through the breathtaking landscapes of Alaska, including glacier viewing and wildlife spotting.</p>
              <p className="cruise-price">From RM 6,499 per person</p>
            </div>
          </div>
          
          <div className="cruise-card">
            <div className="cruise-image">Asian Cruise</div>
            <div className="cruise-content">
              <h3 className="cruise-title">Asian Exploration</h3>
              <p className="cruise-description">9-day cruise visiting popular Asian destinations including Singapore, Thailand, and Vietnam.</p>
              <p className="cruise-price">From RM 4,999 per person</p>
            </div>
          </div>
        </div>
        
        <p style={{ marginTop: '2rem' }}>Contact our cruise specialists today to book your dream cruise vacation or to learn more about our cruise offerings. Our team will assist you in finding the perfect cruise package that meets your expectations and budget.</p>
      </CruiseContainer>
    </motion.div>
  )
}

export default CruiseInfo
