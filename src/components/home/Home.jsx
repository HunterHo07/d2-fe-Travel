import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaShip, FaAnchor, FaCompass, FaStar, FaQuoteLeft } from 'react-icons/fa';

// Components
import Hero from './Hero';
import CruiseCard from './CruiseCard';
import TestimonialCard from './TestimonialCard';

// Dummy data
const cruises = [
  {
    id: 1,
    title: 'Caribbean Paradise',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 days',
    destinations: ['Bahamas', 'Jamaica', 'Mexico'],
    price: 1299,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Mediterranean Adventure',
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 days',
    destinations: ['Italy', 'Greece', 'Spain'],
    price: 1899,
    rating: 4.9
  },
  {
    id: 3,
    title: 'Alaskan Expedition',
    image: 'https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 days',
    destinations: ['Juneau', 'Skagway', 'Ketchikan'],
    price: 1599,
    rating: 4.7
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    text: 'Our Caribbean cruise was absolutely magical! The staff was incredibly attentive, and the destinations were breathtaking. Will definitely book again!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    text: 'The Mediterranean cruise exceeded all our expectations. The ship was luxurious, the food was amazing, and the excursions were perfectly organized.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    text: 'We had an incredible time on our Alaskan cruise. The views were spectacular, and the onboard entertainment was top-notch. Highly recommend!'
  }
];

const Home = () => {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <AboutSection id="about" className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About Us</h2>
            <p>Over 20 years of creating unforgettable cruise experiences</p>
          </motion.div>

          <AboutContent>
            <AboutImage
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800" alt="About OceanVoyager" />
              <ExperienceBadge
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span>20+</span>
                <span>Years</span>
              </ExperienceBadge>
            </AboutImage>

            <AboutText
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Your Premier Cruise Agency Since 2003</h3>
              <p>
                At OceanVoyager, we've been helping travelers explore the world's most beautiful destinations by sea for over two decades. Our commitment to exceptional service, luxurious accommodations, and unforgettable experiences has made us a leader in the cruise industry.
              </p>
              <p>
                What sets us apart is our dedication to personalized service. We understand that each traveler is unique, which is why we work closely with you to create the perfect cruise experience tailored to your preferences and desires.
              </p>

              <AboutFeatures>
                <AboutFeature
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <FeatureIcon><FaShip /></FeatureIcon>
                  <div>
                    <h4>Luxury Fleet</h4>
                    <p>Access to the world's finest cruise ships</p>
                  </div>
                </AboutFeature>

                <AboutFeature
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FeatureIcon><FaAnchor /></FeatureIcon>
                  <div>
                    <h4>Expert Guidance</h4>
                    <p>Seasoned travel advisors at your service</p>
                  </div>
                </AboutFeature>

                <AboutFeature
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <FeatureIcon><FaCompass /></FeatureIcon>
                  <div>
                    <h4>Global Destinations</h4>
                    <p>Curated itineraries to over 100 countries</p>
                  </div>
                </AboutFeature>
              </AboutFeatures>

              <Link to="/booking" className="btn">Book Your Adventure</Link>
            </AboutText>
          </AboutContent>
        </div>
      </AboutSection>

      {/* Featured Cruises Section */}
      <CruisesSection id="cruises" className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Featured Cruises</h2>
            <p>Explore our most popular cruise packages</p>
          </motion.div>

          <CruisesGrid>
            {cruises.map((cruise, index) => (
              <motion.div
                key={cruise.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CruiseCard cruise={cruise} />
              </motion.div>
            ))}
          </CruisesGrid>

          <ViewAllButton
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/booking" className="btn">View All Cruises</Link>
          </ViewAllButton>
        </div>
      </CruisesSection>

      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials" className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What Our Clients Say</h2>
            <p>Hear from travelers who have experienced our cruises</p>
          </motion.div>

          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </TestimonialsGrid>
        </div>
      </TestimonialsSection>

      {/* CTA Section */}
      <CTASection className="section">
        <div className="container">
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Embark on Your Dream Cruise?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Book your next adventure today and experience the luxury and excitement of an OceanVoyager cruise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/booking" className="btn">Book Now</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </motion.div>
          </CTAContent>
        </div>
      </CTASection>
    </main>
  );
};

const AboutSection = styled.section`
  background-color: var(--light);
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ExperienceBadge = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--secondary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  span:first-child {
    font-size: 2rem;
    line-height: 1;
  }

  span:last-child {
    font-size: 1rem;
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-size: 2rem;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: var(--gray);
  }

  .btn {
    margin-top: 1rem;
  }
`;

const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const AboutFeature = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  h4 {
    margin-bottom: 0.3rem;
    color: var(--primary-dark);
  }

  p {
    margin-bottom: 0;
    font-size: 0.9rem;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 119, 182, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const CruisesSection = styled.section`
  background-color: var(--white);
`;

const CruisesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllButton = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;

const TestimonialsSection = styled.section`
  background-color: var(--light);
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(rgba(2, 62, 138, 0.9), rgba(2, 62, 138, 0.9)), url('https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover no-repeat;
  color: var(--white);
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .btn {
    margin: 0 0.5rem;
    padding: 0.8rem 2rem;
  }

  .btn-outline {
    background: transparent;
    border: 2px solid var(--white);
    color: var(--white);
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-weight: 500;
    transition: var(--transition);
    display: inline-block;

    &:hover {
      background: var(--white);
      color: var(--primary-dark);
    }
  }
`;

export default Home;
