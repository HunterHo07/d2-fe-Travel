import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaShip, FaCalendarAlt, FaUsers, FaCheck } from 'react-icons/fa';

// Components
import BookingForm from './BookingForm';
import CruiseList from './CruiseList';

// Dummy data
const cruises = [
  {
    id: 1,
    title: 'Caribbean Paradise',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 days',
    destinations: ['Bahamas', 'Jamaica', 'Mexico'],
    price: 1299,
    rating: 4.8,
    description: 'Experience the crystal-clear waters and white sandy beaches of the Caribbean on this 7-day luxury cruise. Visit the Bahamas, Jamaica, and Mexico while enjoying world-class amenities onboard.'
  },
  {
    id: 2,
    title: 'Mediterranean Adventure',
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 days',
    destinations: ['Italy', 'Greece', 'Spain'],
    price: 1899,
    rating: 4.9,
    description: 'Explore the rich history and stunning coastlines of the Mediterranean. This 10-day cruise takes you to iconic destinations in Italy, Greece, and Spain with expert-guided excursions available at each port.'
  },
  {
    id: 3,
    title: 'Alaskan Expedition',
    image: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 days',
    destinations: ['Juneau', 'Skagway', 'Ketchikan'],
    price: 1599,
    rating: 4.7,
    description: 'Witness the breathtaking wilderness of Alaska on this 8-day expedition. See magnificent glaciers, spot wildlife, and experience the unique culture of Alaska\'s coastal towns.'
  },
  {
    id: 4,
    title: 'Hawaiian Island Hopping',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '9 days',
    destinations: ['Oahu', 'Maui', 'Kauai', 'Big Island'],
    price: 2099,
    rating: 4.8,
    description: 'Discover the paradise of Hawaii as you hop between its most beautiful islands. Enjoy volcanic landscapes, lush rainforests, and pristine beaches on this unforgettable 9-day cruise.'
  },
  {
    id: 5,
    title: 'Northern Europe Explorer',
    image: 'https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 days',
    destinations: ['Norway', 'Sweden', 'Denmark', 'Finland'],
    price: 2399,
    rating: 4.9,
    description: 'Explore the stunning fjords and historic cities of Northern Europe. This 12-day cruise takes you through Norway, Sweden, Denmark, and Finland with opportunities to see the Northern Lights.'
  },
  {
    id: 6,
    title: 'Asian Cultural Journey',
    image: 'https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '14 days',
    destinations: ['Japan', 'South Korea', 'Taiwan', 'Hong Kong'],
    price: 2799,
    rating: 4.7,
    description: 'Immerse yourself in the rich cultures of East Asia on this 14-day cruise. Visit ancient temples, bustling markets, and futuristic cities across Japan, South Korea, Taiwan, and Hong Kong.'
  }
];

const Booking = () => {
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleCruiseSelect = (cruise) => {
    setSelectedCruise(cruise);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingSubmit = (formData) => {
    console.log('Booking submitted:', { cruise: selectedCruise, ...formData });
    setBookingSuccess(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedCruise(null);
    }, 5000);
  };

  return (
    <BookingContainer>
      <BookingHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Dream Cruise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select from our premium cruise packages and embark on an unforgettable journey
          </motion.p>
        </div>
      </BookingHero>

      <div className="container">
        {bookingSuccess ? (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon">
              <FaCheck />
            </div>
            <h2>Booking Successful!</h2>
            <p>Thank you for booking with OceanVoyager. A confirmation email has been sent to your email address.</p>
          </SuccessMessage>
        ) : selectedCruise ? (
          <BookingSection>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BookingHeader>
                <h2>Complete Your Booking</h2>
                <p>You're booking the <strong>{selectedCruise.title}</strong></p>
              </BookingHeader>

              <BookingForm
                cruise={selectedCruise}
                onSubmit={handleBookingSubmit}
                onCancel={() => setSelectedCruise(null)}
              />
            </motion.div>
          </BookingSection>
        ) : (
          <CruiseListSection>
            <motion.div
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Available Cruises</h2>
              <p>Choose from our selection of premium cruise packages</p>
            </motion.div>

            <CruiseList cruises={cruises} onSelect={handleCruiseSelect} />
          </CruiseListSection>
        )}
      </div>

      <BookingFeatures>
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Book With Us
            </motion.h2>
          </div>

          <FeaturesGrid>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaShip />
                </FeatureIcon>
                <h3>Premium Fleet</h3>
                <p>Access to the world's finest cruise ships with luxurious amenities and accommodations.</p>
              </FeatureCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaCalendarAlt />
                </FeatureIcon>
                <h3>Flexible Scheduling</h3>
                <p>Choose from a wide range of departure dates to fit your travel plans perfectly.</p>
              </FeatureCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon>
                  <FaUsers />
                </FeatureIcon>
                <h3>Expert Support</h3>
                <p>Our experienced team is available 24/7 to assist with any questions or special requests.</p>
              </FeatureCard>
            </motion.div>
          </FeaturesGrid>
        </div>
      </BookingFeatures>
    </BookingContainer>
  );
};

const BookingContainer = styled.main`
  padding-top: 80px;
`;

const BookingHero = styled.div`
  background: linear-gradient(rgba(2, 62, 138, 0.8), rgba(2, 62, 138, 0.8)), url('https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover no-repeat;
  color: var(--white);
  padding: 5rem 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
  }
`;

const BookingSection = styled.section`
  padding: 4rem 0;
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray);
  }
`;

const CruiseListSection = styled.section`
  padding: 4rem 0;
`;

const BookingFeatures = styled.section`
  background-color: var(--light);
  padding: 5rem 0;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 1.5rem 0 1rem;
    color: var(--primary-dark);
  }

  p {
    color: var(--gray);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(0, 119, 182, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: var(--primary);
  font-size: 2rem;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 4rem auto;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--success);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    margin: 0 auto 2rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray);
    font-size: 1.1rem;
  }
`;

export default Booking;
