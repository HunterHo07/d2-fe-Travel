import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShip, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FooterLogo>
              <FaShip /> OceanVoyager
            </FooterLogo>
            <p>
              With over 20 years of experience in the cruise industry, we provide unforgettable ocean adventures to destinations worldwide.
            </p>
            <SocialIcons>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>

          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/booking">Book a Cruise</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/contact">Contact Us</Link>
              </FooterLink>
              <FooterLink>
                <a href="#about">About Us</a>
              </FooterLink>
              <FooterLink>
                <a href="#testimonials">Testimonials</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FooterTitle>Popular Destinations</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#cruises">Caribbean Islands</a>
              </FooterLink>
              <FooterLink>
                <a href="#cruises">Mediterranean</a>
              </FooterLink>
              <FooterLink>
                <a href="#cruises">Alaska</a>
              </FooterLink>
              <FooterLink>
                <a href="#cruises">Northern Europe</a>
              </FooterLink>
              <FooterLink>
                <a href="#cruises">Asia & Pacific</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt /> 123 Ocean Drive, Miami, FL 33139
              </ContactItem>
              <ContactItem>
                <FaPhone /> +1 (305) 555-7890
              </ContactItem>
              <ContactItem>
                <FaEnvelope /> info@oceanvoyager.com
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <p>&copy; {currentYear} OceanVoyager Cruises. All rights reserved.</p>
          <FooterBottomLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </FooterBottomLinks>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--primary-dark);
  color: var(--white);
  padding: 4rem 0 1rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: var(--secondary);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--secondary);
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled.li`
  transition: var(--transition);
  
  a {
    transition: var(--transition);
  }
  
  &:hover a {
    color: var(--secondary);
    padding-left: 5px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  
  svg {
    font-size: 1.2rem;
  }
  
  &:hover {
    background: var(--secondary);
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  svg {
    color: var(--secondary);
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    transition: var(--transition);
    
    &:hover {
      color: var(--secondary);
    }
  }
`;

export default Footer;
