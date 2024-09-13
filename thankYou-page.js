import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css'; // Add your custom CSS here for the animations

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1 className="thank-you-title">شكراً!</h1>
        <p className="thank-you-message">تم إرسال بياناتك بنجاح. شكرًا على التسجيل!</p>
        <button className="back-home-button" onClick={() => navigate('/')}>
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
