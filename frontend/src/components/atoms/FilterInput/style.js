import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;

  p {
    font-size: 14px;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  div {
    display: flex;
    gap: 8px;
  }

  
`;


export const Button = styled.button`

    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    /* Lógica de cores baseada na prop $isActive */
    border: 1px solid ${props => props.$isActive ? '#3b82f6' : '#e2e8f0'};
    background-color: ${props => props.$isActive ? '#3b82f6' : 'white'};
    color: ${props => props.$isActive ? 'white' : '#64748b'};

    &:hover {
      background-color: ${props => props.$isActive ? '#2563eb' : '#f8fafc'};
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(10px);
    }


`