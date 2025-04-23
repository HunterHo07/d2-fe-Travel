import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaShip, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <div className="container">
        <HeroContent>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaShip /> 20+ Years of Excellence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Embark on the Journey of a Lifetime
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover breathtaking destinations, luxurious accommodations, and unforgettable experiences with OceanVoyager Cruises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/booking" className="btn-primary">
              Book Your Cruise <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>

          <HeroStats>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <h3>200+</h3>
              <p>Cruise Options</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <h3>50+</h3>
              <p>Destinations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <h3>10k+</h3>
              <p>Happy Clients</p>
            </motion.div>
          </HeroStats>
        </HeroContent>
      </div>

      <HeroWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </HeroWave>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  background: url('https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: var(--white);
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(2, 62, 138, 0.7));
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 158, 0, 0.2);
    color: var(--secondary);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
  }

  .btn-primary {
    background: var(--secondary);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition);
    margin-right: 1rem;

    &:hover {
      background: #e08c00;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .btn-secondary {
    background: transparent;
    border: 2px solid var(--white);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: 500;
    transition: var(--transition);

    &:hover {
      background: var(--white);
      color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 576px) {
    .btn-primary, .btn-secondary {
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

const HeroStats = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;

  div {
    h3 {
      font-size: 2.5rem;
      color: var(--secondary);
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0;
      opacity: 0.8;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1.5rem;

    div {
      text-align: center;
    }
  }
`;

const HeroWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;

  svg {
    display: block;
  }
`;

export default Hero;
