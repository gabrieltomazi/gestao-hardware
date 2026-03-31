import styled from "styled-components";


export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  background-color: ${props => props.$variant === 'danger' ? '#fee2e2' : '#0056D2'};
  color: ${props => props.$variant === 'danger' ? '#dc2626' : '#fff'};
  border: ${props => props.$variant === 'danger' ? '1px solid #fecaca' : 'none'};

  padding: 10px;
  border-radius: 8px;
  transition: ${props => props.$variant === 'danger' ? 'none' : 'all .2s ease-in-out'};

  &:hover{
    background-color: ${props => props.$variant === 'danger' ? '#fee2e2' : '#0247a8'};
  }

`