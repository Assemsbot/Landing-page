import React from 'react';
import Nav from './Nav';
import Button from './Button';
import printerImage from './assets/hp-4525-img-removebg.png'; // Importing image
import styled, { keyframes } from 'styled-components';
import bgImage from './assets/hq-Bg.jpg';
// Styled Components
const HeaderContainer = styled.div`
  background-color: white;
  position: relative;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 96vh;
  box-shadow: 0 4px 6px 1px black; 
  border-bottom-left-radius:30px;
  border-bottom-right-radius:30px;

  @media (max-width: 768px) {
    height: 60vh; /* Adjust height for smaller screens */
  }

   @media (min-width: 600px) and (max-width: 800px) {
    height: 70vh; /* Height for screens between 600px and 800px */
  }
`;


const GradientBackground = styled.div`
  height: 301px;
`;

const HeaderTextContainer = styled.div`
  color: white;
  position: absolute;
  top: 100px;
  left: 55px;
  filter: drop-shadow(2px 4px 6px black);
`;

const HeaderContent = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  text-align: right;
  direction: rtl;
  text-shadow: 4px 3px 7px black;
`;

const TitleText = styled.h3`
  font-size: 3vw;
  font-weight: 800;
  color: #FFE4E1;
`;

const DescriptionText = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 0;
  color: #FFE4E1;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const PrinterImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 40px;
  width: 37vw;
  filter: drop-shadow(5px 20px 10px black);
  transition: transform 0.5s ease-in-out;
  
  ${HeaderContainer}:hover & {
    transform: translateY(-20px);
  }
`;


// Define keyframes for the fade animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for individual characters with animation
const FadeCharacter = styled.span`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
  padding: 0;
  margin: 0;
  font-size: 8vw;
  word-spacing: 0;
  font-weight: 800;
  text-shadow: 4px 3px 7px black;
  color: rgba(255, 0, 130, 0.9);
`;

// Fade Component that maps each character with the delay
const Fade = () => {
  const text = "Special Offer";
  return (
    <>
      {text.split("").map((char, index) => (
        <FadeCharacter
          key={index}
          delay={index * 0.2} // Add delay for each character
        >
          {index === 7 ? '\u00A0' : char}
        </FadeCharacter>
      ))}
    </>
  );
};

// Header Component
const Header = () => (
  <HeaderContainer className="header-dev">
    <Nav />
    <hr style={{color:"white" , width:"80%" , margin:"auto" , opacity:"1"}}></hr>
    <GradientBackground className="header-div" />
    
    <HeaderTextContainer className="header-text">
      <Fade />
      <HeaderContent>
        <TitleText>
          مع الطابعة اتش بي 4525 ليزر الوان وفر مصاريف طباعة الكتب والملازم
        </TitleText>
        <DescriptionText>
          بتكلفة 15 قرش للورقة الألوان هتوفر مصاريف الطباعة وتقدر تبدأ مشروع
          طباعة كتب وملازم بسعر منافس!!
        </DescriptionText>
        <ButtonContainer>
          <Button text="معرفة المزيد" link="#features" />
          <Button text="اطلب الآن" value="#form" />
        </ButtonContainer>
      </HeaderContent>
    </HeaderTextContainer>

    <PrinterImage src={printerImage} alt="HP 4525 Printer" />
  </HeaderContainer>
);

export default Header;
