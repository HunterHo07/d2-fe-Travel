import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaUser, FaPaperPlane, FaCheck } from 'react-icons/fa';

// Components
import Map from './Map';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <ContactContainer>
      <ContactHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here to help with any questions about our cruises
          </motion.p>
        </div>
      </ContactHero>

      <ContactSection>
        <div className="container">
          <ContactGrid>
            <ContactInfo>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Have questions about our cruise packages or need assistance with booking? Our team is ready to help you plan your perfect vacation.
              </motion.p>

              <ContactMethods>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ContactMethod>
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3>Visit Us</h3>
                      <p>123 Ocean Drive, Miami, FL 33139</p>
                    </div>
                  </ContactMethod>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ContactMethod>
                    <div className="icon">
                      <FaPhone />
                    </div>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 (305) 555-7890</p>
                    </div>
                  </ContactMethod>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <ContactMethod>
                    <div className="icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@oceanvoyager.com</p>
                    </div>
                  </ContactMethod>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ContactMethod>
                    <div className="icon">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h3>WhatsApp</h3>
                      <p>+1 (305) 555-7890</p>
                    </div>
                  </ContactMethod>
                </motion.div>
              </ContactMethods>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <BusinessHours>
                  <h3>Business Hours</h3>
                  <ul>
                    <li><span>Monday - Friday:</span> 9:00 AM - 6:00 PM</li>
                    <li><span>Saturday:</span> 10:00 AM - 4:00 PM</li>
                    <li><span>Sunday:</span> Closed</li>
                  </ul>
                </BusinessHours>
              </motion.div>
            </ContactInfo>

            <ContactFormContainer>
              {formSubmitted ? (
                <SuccessMessage
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="icon">
                    <FaCheck />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you shortly.</p>
                </SuccessMessage>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Send Us a Message</h2>
                  <ContactForm onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                      <Label>
                        <FaUser /> Your Name
                      </Label>
                      <Input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Enter your full name"
                        error={errors.name}
                      />
                      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>
                        <FaEnvelope /> Email Address
                      </Label>
                      <Input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        placeholder="Enter your email address"
                        error={errors.email}
                      />
                      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>
                        <FaPhone /> Phone Number
                      </Label>
                      <Input
                        {...register('phone')}
                        placeholder="Enter your phone number (optional)"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>
                        <FaPaperPlane /> Message
                      </Label>
                      <Textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder="How can we help you?"
                        rows="5"
                        error={errors.message}
                      />
                      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                    </FormGroup>

                    <SubmitButton type="submit">
                      Send Message
                    </SubmitButton>
                  </ContactForm>
                </motion.div>
              )}
            </ContactFormContainer>
          </ContactGrid>
        </div>
      </ContactSection>

      <MapSection>
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Find Us</h2>
            <p>Visit our office in Miami</p>
          </motion.div>

          <MapContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Map />
          </MapContainer>
        </div>
      </MapSection>
    </ContactContainer>
  );
};

const ContactContainer = styled.main`
  padding-top: 80px;
`;

const ContactHero = styled.div`
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

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--primary-dark);
    margin-bottom: 1.5rem;
  }

  > p {
    color: var(--gray);
    margin-bottom: 2.5rem;
  }
`;

const ContactMethods = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 119, 182, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.1rem;
    color: var(--primary-dark);
    margin-bottom: 0.3rem;
  }

  p {
    color: var(--gray);
  }
`;

const BusinessHours = styled.div`
  background: var(--light);
  padding: 1.5rem;
  border-radius: 10px;

  h3 {
    font-size: 1.1rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }

  ul {
    display: grid;
    gap: 0.8rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    color: var(--gray);

    span {
      font-weight: 500;
      color: var(--primary-dark);
    }
  }
`;

const ContactFormContainer = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    color: var(--primary-dark);
    margin-bottom: 2rem;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--primary-dark);

  svg {
    color: var(--primary);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${props => props.error ? 'var(--danger)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 5px;
  font-family: inherit;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(0, 119, 182, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${props => props.error ? 'var(--danger)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 5px;
  font-family: inherit;
  resize: vertical;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(0, 119, 182, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;

  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--success);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin: 0 auto 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray);
  }
`;

const MapSection = styled.section`
  background-color: var(--light);
  padding: 5rem 0;
`;

const MapContainer = styled(motion.div)`
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 3rem;
`;

export default Contact;
