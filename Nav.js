import React from 'react';
import styled from 'styled-components';

// Styled Components
const NavContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
filter: drop-shadow(2px 4px 6px black);

`;

const Logo = styled.span`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 4px 3px 7px black;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: bold;
  text-shadow: 4px 3px 7px black;
`;

const NavItem = styled.li`
  cursor: pointer;
  position: relative; /* Ensure positioning is relative to the list item */
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: rgb(0, 255, 0); /* Example hover color */
    transform: scale(1.1);
   }

  &::before {
    content: "";
    position: absolute;
    top: 15%;
    right: -10px; /* Start on the right */
    width: 2px;
    height: 80%;
    margin:"auto";
    background-color: white;
  }
`;


// Nav Component
export default function Nav() {
  return (
    <NavContainer>
      <Logo>Pro-print</Logo>
      <NavList className='nav-list'>
        <NavItem>المواصفات</NavItem>
        <NavItem>شراء الان</NavItem>
        <NavItem>تواصل معنا</NavItem>
      </NavList>
    </NavContainer>
  );
}
