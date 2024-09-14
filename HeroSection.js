import React from 'react';
import styled from 'styled-components';
import useIntersectionObserver from './AnimationHook';
import printerImageOne from './assets/hp-4525-img-7-removebg-preview.png';
import printerImageTwo from './assets/hp-4525-img-6-removebg-preview.png';
import printerImageThree from './assets/hp-45-25-img-4-removebg-preview.png';


// Styled Components
const HeroSectionContainer = styled.section`
  background: white;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;
const Title = styled.div`
    border-radius:15px;
    font-size: 25px;
    font-weight: 500;
    background: #ff0066;
    padding: 5px 10px;
    color: white;
    box-shadow: 0px 3px 4px 1px grey;
`;
const FirstHeroContent = styled.div`
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  width: 100%;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;
const SecondHeroContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  width: 100%;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const ImageContainer = styled.div`
  filter: drop-shadow(2px 4px 6px black);
  width: 30%;
  position: relative;
`;

const StyledSVG = styled.svg`
  padding: 0;
  margin: 0;
  display: block;
  overflow: visible;
`;

const FirstPrinterImage = styled.img`
  width: 30vw;
  position: absolute;
  top: 18%;
  left: 35%;
  transform: rotateY(180deg) translate(10%, 0%);
`;
const SecondPrinterImage = styled.img`
  width: 30vw;
  position: absolute;
  top: 18%;
  left: -10%;
`;

const TextContainer = styled.div`
  padding:10px;
  margin:10px;
  width: 65%;
  direction: rtl;
`;

const DescriptionText = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 0;
  color: #1b53c5;
`;

const Heading = styled.h3`
  font-size: 2vw;
  font-weight: bold;
  color: #ff0066;
`;

const Paragraph = styled.p`
  font-size: 1.5vw;
  line-height: 1.5;
  margin: 20px 0;
`;

const HighlightText = styled.span`
  text-align: center;
  display: inline-block;
  margin-top: 25px;
  margin-right: 55%;
  width: fit-content;
  background-color: #ff0066;
  color: white;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 1.5vw;
  box-shadow: 0px 3px 4px 1px grey;

`;
const SpecialWords = styled.span`
  font-weight: bold;
  color: #1b53c5;
  `

const HeroSection = () => {
  const [firstRef, firstInView] = useIntersectionObserver({ threshold: 0.1 });
  const [secondRef, secondInView] = useIntersectionObserver({ threshold: 0.1 });
  const [thirdRef, thirdInView] = useIntersectionObserver({threshold: 0.1});
  return (
    <HeroSectionContainer id='features'>
      <TitleContainer ref={firstRef} inView={firstInView}>
        <Title className='hero-title'> 
        ليه الطابعة اتش بي 4525 ليزر الوان
        </Title>
      </TitleContainer>
      <FirstHeroContent ref={firstRef} inView={firstInView}>
        <ImageContainer>
          <StyledSVG viewBox="50 50 110 100" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M53.6,-23.6C59.6,1,47.8,25.3,29.2,38.4C10.5,51.6,-15,53.6,-29.2,42.7C-43.5,31.7,-46.5,7.8,-39.8,-17.8C-33,-43.5,-16.5,-70.9,3.6,-72.1C23.8,-73.3,47.6,-48.3,53.6,-23.6Z"
              transform="translate(100 100)"
            />
          </StyledSVG>
          <FirstPrinterImage src={printerImageOne} alt="Printer" />
        </ImageContainer>
        <TextContainer>
          <DescriptionText>
            <Heading> جودة عالية مع نظام متطور لتوفير الحبر :</Heading>
              <Paragraph>
                جودة عالية مع نظام متطور لتوفير الحبر
                توفير تكلفة الطباعة عن طريق تقنية توزيع حبر ذكية هتديك أعلى كفاءة وجودة بأقل استهلاك للحبر 
                مدعومة بتقنية متطورة في تصنيع جزيئات الحبر الأصلي اللي بتقلل كمية الحبر الهادر وده هيديك توفير في الحبر المستهلك بيوصل ل 30%.
                
                <HighlightText className='video-title'>لو عايز تفاصيل اكتر شوف الفيديو ده:</HighlightText>
              </Paragraph> 
          </DescriptionText>
        </TextContainer>
      </FirstHeroContent>
      <SecondHeroContent ref={secondRef} inView={secondInView}>
        <ImageContainer>
          <StyledSVG viewBox="50 50 110 100" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M53.6,-23.6C59.6,1,47.8,25.3,29.2,38.4C10.5,51.6,-15,53.6,-29.2,42.7C-43.5,31.7,-46.5,7.8,-39.8,-17.8C-33,-43.5,-16.5,-70.9,3.6,-72.1C23.8,-73.3,47.6,-48.3,53.6,-23.6Z"
              transform="translate(100 100)"
            />
          </StyledSVG>
          <SecondPrinterImage src={printerImageTwo} alt="Printer" />
        </ImageContainer>
        <TextContainer>
          <DescriptionText>
            <Heading> سرعة الطباعة  :</Heading>
              <Paragraph>
              اتش بي حققت المعادلة الصعبه <SpecialWords>( السرعة و الجودة وتكلفة قليله في وقت واحد ) </SpecialWords>عشان وقتك مهم الطابعة بتطبع 40 ورقة 
              الوان في الدقيقة الواحدة ومع النظام المتطور لتوفير الحبر هتعمل انتاجيه عاليه بجودة عاليه في وقت اقل

              </Paragraph> 
          </DescriptionText>
        </TextContainer>
      </SecondHeroContent>
      <FirstHeroContent ref={thirdRef} inView={thirdInView}>
        <ImageContainer>
          <StyledSVG viewBox="50 50 110 100" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M53.6,-23.6C59.6,1,47.8,25.3,29.2,38.4C10.5,51.6,-15,53.6,-29.2,42.7C-43.5,31.7,-46.5,7.8,-39.8,-17.8C-33,-43.5,-16.5,-70.9,3.6,-72.1C23.8,-73.3,47.6,-48.3,53.6,-23.6Z"
              transform="translate(100 100)"
            />
          </StyledSVG>
          <FirstPrinterImage src={printerImageThree} alt="Printer" />
        </ImageContainer>
        <TextContainer>
          <DescriptionText>
            <Heading> التوصيلات والتعريفات :</Heading>
              <Paragraph>
                الطابعة بتدعم التوصيل بالشبكات من خلال النتورك هتعرف تطبع من الموبايل واللابتوب بكل سهولة عن طريق الراوتر والتوصيل على اجهزة السونار 
                 ومتاح لينكات التعريفات لكل انظمة التشغيل تحت الفيديو .
                <HighlightText className='video-title'>فيديو خطوات التعريف الصحيحة:</HighlightText>
              </Paragraph> 
          </DescriptionText>
        </TextContainer>
      </FirstHeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
