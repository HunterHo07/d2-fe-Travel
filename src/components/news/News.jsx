import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const NewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    color: #003366;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .news-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .news-item {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  
  .news-image {
    background-color: #003366;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    font-weight: bold;
    
    @media (min-width: 768px) {
      min-width: 300px;
    }
  }
  
  .news-content {
    padding: 1.5rem;
    flex: 1;
  }
  
  .news-date {
    color: #FFC107;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .news-title {
    color: #003366;
    margin-bottom: 1rem;
  }
  
  .news-description {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .read-more {
    color: #003366;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    
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

function News() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <NewsContainer>
        <h1>What's New at Jebsen Travel</h1>
        
        <div className="news-list">
          <div className="news-item">
            <div className="news-image">Special Offer</div>
            <div className="news-content">
              <p className="news-date">April 20, 2025</p>
              <h3 className="news-title">Summer Cruise Special: Early Bird Discounts</h3>
              <p className="news-description">Book your summer cruise before May 31st and enjoy early bird discounts of up to 20% on select Mediterranean and Caribbean cruises. Plus, receive onboard credit of up to RM 500 per cabin when you book through Jebsen Travel & Tours.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
          
          <div className="news-item">
            <div className="news-image">New Destination</div>
            <div className="news-content">
              <p className="news-date">April 15, 2025</p>
              <h3 className="news-title">Introducing Our New European River Cruises</h3>
              <p className="news-description">We're excited to announce our new partnership with leading European river cruise operators. Explore the charming waterways of Europe with our curated selection of river cruises along the Rhine, Danube, and Seine. Experience the heart of Europe from a unique perspective.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
          
          <div className="news-item">
            <div className="news-image">Travel Tips</div>
            <div className="news-content">
              <p className="news-date">April 10, 2025</p>
              <h3 className="news-title">Cruise Packing Guide: What to Bring on Your Voyage</h3>
              <p className="news-description">Preparing for your cruise can be overwhelming. Our travel experts have compiled a comprehensive packing guide to ensure you bring all the essentials without overpacking. From formal wear for gala dinners to casual attire for excursions, we've got you covered.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
          
          <div className="news-item">
            <div className="news-image">Company Update</div>
            <div className="news-content">
              <p className="news-date">April 5, 2025</p>
              <h3 className="news-title">Jebsen Travel Celebrates 46 Years of Excellence</h3>
              <p className="news-description">This year marks our 46th anniversary in the travel industry. Since our founding in 1979, we've remained committed to providing unsurpassed customer service and creating memorable travel experiences. We're celebrating with special anniversary offers throughout the year.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        </div>
      </NewsContainer>
    </motion.div>
  )
}

export default News
