import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaShip, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <NavBar>
          <Logo 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <FaShip /> OceanVoyager
            </Link>
          </Logo>

          <DesktopMenu>
            <NavLinks>
              <NavItem 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={location.pathname === '/' ? 'active' : ''}
              >
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={location.pathname === '/booking' ? 'active' : ''}
              >
                <Link to="/booking">Book a Cruise</Link>
              </NavItem>
              <NavItem 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                <Link to="/contact">Contact Us</Link>
              </NavItem>
            </NavLinks>
          </DesktopMenu>

          <MobileMenuToggle onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuToggle>
        </NavBar>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLinks>
              <MobileNavItem className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </MobileNavItem>
              <MobileNavItem className={location.pathname === '/booking' ? 'active' : ''}>
                <Link to="/booking">Book a Cruise</Link>
              </MobileNavItem>
              <MobileNavItem className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">Contact Us</Link>
              </MobileNavItem>
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: var(--transition);
  padding: ${props => props.scrolled ? '0.5rem 0' : '1rem 0'};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-dark);

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: var(--secondary);
  }
`;

const DesktopMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(motion.li)`
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary);
    transition: var(--transition);
  }

  &:hover::after, &.active::after {
    width: 100%;
  }

  &.active a {
    color: var(--primary-dark);
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: transparent;
  color: var(--primary-dark);
  font-size: 1.5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background: transparent;
    transform: none;
    box-shadow: none;
  }
`;

const MobileMenu = styled(motion.div)`
  background: var(--white);
  overflow: hidden;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const MobileNavItem = styled.li`
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-weight: 500;

  &.active {
    color: var(--primary-dark);
    background: rgba(0, 119, 182, 0.05);
  }
`;

export default Header;
