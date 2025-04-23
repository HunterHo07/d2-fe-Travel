import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaStar, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const CruiseCard = ({ cruise }) => {
  const { title, image, duration, destinations, price, rating } = cruise;
  
  return (
    <CardContainer
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
    >
      <CardImage>
        <img src={image} alt={title} />
        <CardPrice>${price}</CardPrice>
      </CardImage>
      
      <CardContent>
        <CardRating>
          <FaStar />
          <span>{rating}</span>
        </CardRating>
        
        <CardTitle>{title}</CardTitle>
        
        <CardDetails>
          <CardDetail>
            <FaClock />
            <span>{duration}</span>
          </CardDetail>
          
          <CardDetail>
            <FaMapMarkerAlt />
            <span>{destinations.join(', ')}</span>
          </CardDetail>
        </CardDetails>
        
        <CardFooter>
          <Link to="/booking" className="btn-book">
            Book Now <FaArrowRight />
          </Link>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

const CardImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CardContainer}:hover & img {
    transform: scale(1.1);
  }
`;

const CardPrice = styled.div`
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

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardRating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--secondary);
  font-weight: 500;
  
  svg {
    color: var(--secondary);
  }
`;

const CardTitle = styled.h3`
  margin: 0.8rem 0;
  font-size: 1.3rem;
  color: var(--primary-dark);
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const CardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray);
  font-size: 0.9rem;
  
  svg {
    color: var(--primary);
  }
`;

const CardFooter = styled.div`
  .btn-book {
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
    }
  }
`;

export default CruiseCard;
