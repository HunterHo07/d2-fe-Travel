import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1, h2 {
    color: #003366;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .team-intro {
    background-color: #f5f9ff;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #003366;
    margin: 2rem 0;
  }
  
  .partner-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .partner-item {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    height: 100%;
  }
  
  .partner-header {
    background-color: #003366;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  .partner-content {
    padding: 1.5rem;
  }
  
  .partner-country {
    font-weight: bold;
    color: #003366;
    margin-bottom: 0.5rem;
  }
  
  .partner-name {
    margin-bottom: 0.5rem;
  }
  
  .partner-address {
    margin-bottom: 0.5rem;
    color: #666;
  }
  
  .partner-contact {
    color: #666;
  }
  
  .partner-email {
    color: #0066cc;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

function TeamWorld() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <TeamContainer>
        <h1>Team World</h1>
        
        <div className="team-intro">
          <p>Jebsen Travel & Tours is proud to be part of a global network of trusted travel partners. Our international connections allow us to provide seamless travel experiences for our clients worldwide. Below is a list of our international partners who share our commitment to excellence in travel services.</p>
        </div>
        
        <h2>Our Global Partners</h2>
        
        <div className="partner-list">
          <div className="partner-item">
            <div className="partner-header">
              <h3>Asia Pacific</h3>
            </div>
            <div className="partner-content">
              <p className="partner-country">Singapore</p>
              <p className="partner-name">Cruise Asia Singapore</p>
              <p className="partner-address">36 Carpenter Street, #02-01, Singapore 059915</p>
              <p className="partner-contact">Tel: +65 6323 1233</p>
              <p><a href="mailto:info@cruiseasia.sg" className="partner-email">info@cruiseasia.sg</a></p>
            </div>
          </div>
          
          <div className="partner-item">
            <div className="partner-header">
              <h3>Europe</h3>
            </div>
            <div className="partner-content">
              <p className="partner-country">United Kingdom</p>
              <p className="partner-name">European Cruise Specialists</p>
              <p className="partner-address">12 Regent Street, London, SW1Y 4PE, United Kingdom</p>
              <p className="partner-contact">Tel: +44 20 7123 4567</p>
              <p><a href="mailto:bookings@eurocruise.co.uk" className="partner-email">bookings@eurocruise.co.uk</a></p>
            </div>
          </div>
          
          <div className="partner-item">
            <div className="partner-header">
              <h3>Middle East</h3>
            </div>
            <div className="partner-content">
              <p className="partner-country">Jordan</p>
              <p className="partner-name">Cruise Club c/o Dahlan Tours and Travel</p>
              <p className="partner-address">Wasfi Al Tal Street, Aqqad Center, No. 75, Ground Floor, Amman 11196, Jordan</p>
              <p className="partner-contact">Tel: +962 6 553 5841</p>
              <p><a href="mailto:outgoingmanager@dahlan.com" className="partner-email">outgoingmanager@dahlan.com</a></p>
            </div>
          </div>
          
          <div className="partner-item">
            <div className="partner-header">
              <h3>North America</h3>
            </div>
            <div className="partner-content">
              <p className="partner-country">United States</p>
              <p className="partner-name">American Cruise Connection</p>
              <p className="partner-address">555 Fifth Avenue, Suite 1200, New York, NY 10017, USA</p>
              <p className="partner-contact">Tel: +1 212 555 1234</p>
              <p><a href="mailto:info@americancruiseconnection.com" className="partner-email">info@americancruiseconnection.com</a></p>
            </div>
          </div>
          
          <div className="partner-item">
            <div className="partner-header">
              <h3>Australia & New Zealand</h3>
            </div>
            <div className="partner-content">
              <p className="partner-country">Australia</p>
              <p className="partner-name">Oceania Cruise Partners</p>
              <p className="partner-address">42 Circular Quay West, Sydney, NSW 2000, Australia</p>
              <p className="partner-contact">Tel: +61 2 8123 4567</p>
              <p><a href="mailto:bookings@oceaniacruisepartners.com.au" className="partner-email">bookings@oceaniacruisepartners.com.au</a></p>
            </div>
          </div>
          
          <div className="partner-item">
            <div className="partner-header">
              <h3>South America</h3>
            </div>
            <div className="partner-content">
              <p className="partner-country">Brazil</p>
              <p className="partner-name">South American Cruise Experts</p>
              <p className="partner-address">Av. Atlântica, 1702, Copacabana, Rio de Janeiro, RJ 22021-001, Brazil</p>
              <p className="partner-contact">Tel: +55 21 3456 7890</p>
              <p><a href="mailto:contato@sacruiseexperts.com.br" className="partner-email">contato@sacruiseexperts.com.br</a></p>
            </div>
          </div>
        </div>
      </TeamContainer>
    </motion.div>
  )
}

export default TeamWorld
