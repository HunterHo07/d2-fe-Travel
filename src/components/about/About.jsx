import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    color: #003366;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  .highlight {
    background-color: #f5f9ff;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #003366;
    margin: 2rem 0;
  }
  
  .founded {
    font-weight: bold;
    color: #003366;
  }
  
  .services {
    margin-top: 2rem;
  }
  
  .services ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
  
  .services li {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-left: 3px solid #FFC107;
  }
`

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

function About() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <AboutContainer>
        <h1>About Jebsen Travel & Tours</h1>
        
        <div className="highlight">
          <p><span className="founded">JEBSEN TRAVEL was founded in 1979</span> by a small group of experienced travel consultants who shared a common goal - unsurpassed customer service. This full-service organization was to be characterized by the highest standards of professional excellence with particular emphasis on the needs and comfort of our clients.</p>
        </div>
        
        <p>For over four decades, Jebsen Travel & Tours Services Sdn Bhd has been a trusted name in the Malaysian travel industry. Based in Kuala Lumpur, we provide comprehensive travel services to both corporate and leisure travelers.</p>
        
        <p>As a member of the Malaysian Association of Tour and Travel Agents (MATTA), we adhere to the highest industry standards and practices. Our team of experienced travel professionals is dedicated to creating memorable travel experiences tailored to your specific needs and preferences.</p>
        
        <div className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Cruise Packages and Information</li>
            <li>International Tour Packages</li>
            <li>Corporate Travel Management</li>
            <li>Flight Bookings</li>
            <li>Hotel Reservations</li>
            <li>Travel Insurance</li>
            <li>Visa Application Assistance</li>
            <li>Transportation Services</li>
          </ul>
        </div>
        
        <p>Located at Lot 2.81, 2nd Floor, Wisma Cosway, Jalan Raja Chulan, Kuala Lumpur, our office serves as a one-stop solution for all your travel needs. Whether you're planning a family vacation, a corporate retreat, or a solo adventure, our team is here to make your journey seamless and enjoyable.</p>
        
        <p>At Jebsen Travel & Tours, we believe that exceptional service is not just about meeting expectations—it's about exceeding them. That's why we go the extra mile to ensure that every aspect of your travel experience is nothing short of extraordinary.</p>
      </AboutContainer>
    </motion.div>
  )
}

export default About
