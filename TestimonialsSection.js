import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  background: #f4f4f4;
  padding: 60px 20px;
  text-align: center;
`;

const Testimonial = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
`;

const TestimonialsSection = () => (
  <TestimonialsContainer id="testimonials">
    <h2>What Our Customers Say</h2>
    <div>
      <Testimonial>
        <p>"The TopPrint Pro has completely transformed our office printing. It's fast and reliable!"</p>
        <cite>- Alex J.</cite>
      </Testimonial>
      <Testimonial>
        <p>"We love the eco-friendly features and the quality of the prints. Highly recommend!"</p>
        <cite>- Jamie L.</cite>
      </Testimonial>
    </div>
  </TestimonialsContainer>
);

export default TestimonialsSection;
