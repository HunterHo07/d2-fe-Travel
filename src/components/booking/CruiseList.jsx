import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaStar, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const CruiseList = ({ cruises, onSelect }) => {
  return (
    <CruiseGrid>
      {cruises.map((cruise, index) => (
        <motion.div
          key={cruise.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CruiseCard>
            <CruiseImage>
              <img src={cruise.image} alt={cruise.title} />
              <CruisePrice>${cruise.price}</CruisePrice>
            </CruiseImage>
            
            <CruiseContent>
              <CruiseHeader>
                <CruiseTitle>{cruise.title}</CruiseTitle>
                <CruiseRating>
                  <FaStar />
                  <span>{cruise.rating}</span>
                </CruiseRating>
              </CruiseHeader>
              
              <CruiseDetails>
                <CruiseDetail>
                  <FaClock />
                  <span>{cruise.duration}</span>
                </CruiseDetail>
                
                <CruiseDetail>
                  <FaMapMarkerAlt />
                  <span>{cruise.destinations.join(', ')}</span>
                </CruiseDetail>
              </CruiseDetails>
              
              <CruiseDescription>
                {cruise.description}
              </CruiseDescription>
              
              <BookButton onClick={() => onSelect(cruise)}>
                Book This Cruise <FaArrowRight />
              </BookButton>
            </CruiseContent>
          </CruiseCard>
        </motion.div>
      ))}
    </CruiseGrid>
  );
};

const CruiseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const CruiseCard = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CruiseImage = styled.div`
  position: relative;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

const CruisePrice = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--secondary);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
`;

const CruiseContent = styled.div`
  padding: 1.5rem;
`;

const CruiseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CruiseTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-dark);
`;

const CruiseRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--secondary);
  font-weight: 500;
  
  svg {
    color: var(--secondary);
  }
`;

const CruiseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CruiseDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray);
  
  svg {
    color: var(--primary);
  }
`;

const CruiseDescription = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BookButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary);
  color: var(--white);
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default CruiseList;
