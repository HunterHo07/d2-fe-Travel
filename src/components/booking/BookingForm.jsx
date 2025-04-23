import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaUsers, FaCreditCard, FaLock } from 'react-icons/fa';

const BookingForm = ({ cruise, onSubmit, onCancel }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [passengers, setPassengers] = useState(2);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onFormSubmit = (data) => {
    onSubmit({
      ...data,
      departureDate: startDate,
      passengers,
      cruiseId: cruise.id,
      cruiseTitle: cruise.title,
      totalPrice: cruise.price * passengers
    });
  };
  
  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FormGrid onSubmit={handleSubmit(onFormSubmit)}>
        <FormSection>
          <SectionTitle>Cruise Details</SectionTitle>
          
          <CruiseDetails>
            <img src={cruise.image} alt={cruise.title} />
            <div>
              <h3>{cruise.title}</h3>
              <p>{cruise.duration} | {cruise.destinations.join(', ')}</p>
              <p className="price">${cruise.price} <span>per person</span></p>
            </div>
          </CruiseDetails>
          
          <FormGroup>
            <Label>
              <FaCalendarAlt /> Departure Date
            </Label>
            <DatePickerWrapper>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy"
                className="date-picker"
              />
            </DatePickerWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label>
              <FaUsers /> Number of Passengers
            </Label>
            <PassengerSelect>
              <button 
                type="button" 
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                disabled={passengers <= 1}
              >
                -
              </button>
              <span>{passengers}</span>
              <button 
                type="button" 
                onClick={() => setPassengers(Math.min(10, passengers + 1))}
                disabled={passengers >= 10}
              >
                +
              </button>
            </PassengerSelect>
          </FormGroup>
          
          <TotalPrice>
            <span>Total Price:</span>
            <span className="amount">${cruise.price * passengers}</span>
          </TotalPrice>
        </FormSection>
        
        <FormSection>
          <SectionTitle>Personal Information</SectionTitle>
          
          <FormRow>
            <FormGroup>
              <Label>
                <FaUser /> First Name
              </Label>
              <Input 
                {...register('firstName', { required: 'First name is required' })}
                placeholder="Enter your first name"
                error={errors.firstName}
              />
              {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label>
                <FaUser /> Last Name
              </Label>
              <Input 
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Enter your last name"
                error={errors.lastName}
              />
              {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </FormGroup>
          </FormRow>
          
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
              {...register('phone', { required: 'Phone number is required' })}
              placeholder="Enter your phone number"
              error={errors.phone}
            />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </FormGroup>
          
          <SectionTitle>Payment Information</SectionTitle>
          
          <FormGroup>
            <Label>
              <FaCreditCard /> Card Number
            </Label>
            <Input 
              {...register('cardNumber', { 
                required: 'Card number is required',
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: 'Card number must be 16 digits'
                }
              })}
              placeholder="XXXX XXXX XXXX XXXX"
              error={errors.cardNumber}
            />
            {errors.cardNumber && <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>}
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label>
                <FaCalendarAlt /> Expiry Date
              </Label>
              <Input 
                {...register('expiryDate', { 
                  required: 'Expiry date is required',
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: 'Format: MM/YY'
                  }
                })}
                placeholder="MM/YY"
                error={errors.expiryDate}
              />
              {errors.expiryDate && <ErrorMessage>{errors.expiryDate.message}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label>
                <FaLock /> CVV
              </Label>
              <Input 
                {...register('cvv', { 
                  required: 'CVV is required',
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: 'CVV must be 3 or 4 digits'
                  }
                })}
                placeholder="XXX"
                error={errors.cvv}
              />
              {errors.cvv && <ErrorMessage>{errors.cvv.message}</ErrorMessage>}
            </FormGroup>
          </FormRow>
        </FormSection>
        
        <FormActions>
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">
            Complete Booking
          </SubmitButton>
        </FormActions>
      </FormGrid>
    </FormContainer>
  );
};

const FormContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CruiseDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  img {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: var(--primary-dark);
  }
  
  p {
    color: var(--gray);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-weight: 700;
    color: var(--primary-dark);
    font-size: 1.1rem;
    
    span {
      font-weight: 400;
      font-size: 0.9rem;
      color: var(--gray);
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

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

const ErrorMessage = styled.p`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

const DatePickerWrapper = styled.div`
  .date-picker {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-family: inherit;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(0, 119, 182, 0.2);
    }
  }
`;

const PassengerSelect = styled.div`
  display: flex;
  align-items: center;
  
  button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary);
    color: var(--white);
    border-radius: 5px;
    font-size: 1.5rem;
    
    &:disabled {
      background: rgba(0, 0, 0, 0.1);
      cursor: not-allowed;
    }
  }
  
  span {
    width: 60px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 500;
  
  .amount {
    font-size: 1.5rem;
    color: var(--primary-dark);
    font-weight: 700;
  }
`;

const FormActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
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
  
  @media (max-width: 576px) {
    order: -1;
  }
`;

const CancelButton = styled.button`
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--gray);
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: none;
    box-shadow: none;
  }
`;

export default BookingForm;
