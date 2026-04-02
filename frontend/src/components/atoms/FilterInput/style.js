import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;

  p {
    font-size: 14px;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  
`;

export const Select = styled.select`
  outline: none;
  /* border: 1px solid ${props => props.$isActive ? '#3b82f6' : '#e2e8f0'};
  background-color: ${props => props.$isActive ? '#3b82f6' : 'white'}; 
  color: ${props => props.$isActive ? 'white' : '#64748b'}; */
  width: ${props => props.$item === 'MOTHERBOARD' ? 'fit-content' : '4rem'};

`