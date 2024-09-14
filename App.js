import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import './App.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationForm from './Form';
import ThankYouPage from './thankYou-page'; // Ensure this path is correct
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <Helmet>
      <title>TopPrint Pro - Revolutionize Your Printing Experience</title>
      <meta
        name="description"
        content="TopPrint Pro offers high-speed, eco-friendly printing solutions for both home and office use. Learn more about our features and customer testimonials."
      />
    </Helmet>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />

    <Routes>
      <Route path="/" element={<ValidationForm />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
