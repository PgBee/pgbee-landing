import React from 'react';
import styled from 'styled-components';

const HamburgerIcon = ({ isOpen, toggle }) => {
  return (
    <StyledButton 
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      isOpen={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none;
  
  &:focus {
    outline: none;
  }
  
  span {
    width: 100%;
    height: 2px;
    background: #4b5563; /* gray-600 */
    border-radius: 10px;
    transition: all 0.25s cubic-bezier(0.33, 1, 0.68, 1);
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ isOpen }) => 
        isOpen ? 'rotate(45deg) translateY(0px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => 
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => 
        isOpen ? 'rotate(-45deg) translateY(0px)' : 'rotate(0)'};
    }
  }
`;

export default HamburgerIcon;
