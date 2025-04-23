import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating, text } = testimonial;
  
  // Create an array of stars based on the rating
  const stars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} />
  ));
  
  return (
    <CardContainer
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
    >
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      
      <CardContent>
        <CardText>{text}</CardText>
        
        <CardRating>
          {stars}
        </CardRating>
        
        <CardAuthor>
          <AuthorImage>
            <img src={image} alt={name} />
          </AuthorImage>
          <AuthorName>{name}</AuthorName>
        </CardAuthor>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background: var(--white);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: rgba(0, 119, 182, 0.1);
  font-size: 2rem;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CardText = styled.p`
  margin-bottom: 1.5rem;
  color: var(--gray);
  font-style: italic;
`;

const CardRating = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: var(--secondary);
  }
`;

const CardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorName = styled.h4`
  font-size: 1rem;
  color: var(--primary-dark);
  margin: 0;
`;

export default TestimonialCard;
