import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    additionalPhone: '', // New field for additional phone number
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Persist form data on page refresh
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateForm = () => {
    let formErrors = {};

    // Name validation: only letters and spaces allowed, 3-50 characters
    const nameRegex = /^[\u0621-\u064A\s]{3,50}$/;
    if (!nameRegex.test(formData.name)) {
      formErrors.name = 'يجب أن يحتوي الاسم على 3 إلى 50 حرفًا ويتكون من حروف فقط.';
    }

    // Egyptian phone number validation: starts with 010, 011, 012, or 015, and contains 11 digits
    const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = 'أدخل رقم موبايل مصري صالح (مثل: 010XXXXXXXX).';
    }

    // Address validation: at least 5 characters
    if (formData.address.length < 5) {
      formErrors.address = 'يجب أن يكون العنوان 5 أحرف على الأقل.';
    }

    return formErrors;
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  const formErrors = validateForm();
  if (Object.keys(formErrors).length === 0) {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Email sent successfully!');
        navigate('/thank-you');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    }
  } else {
    setErrors(formErrors);
  }
};

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the error on change
  };

  return (
    <div className="form-container">
      <form className="validation-form" onSubmit={handleSubmit}>
        <h2 className="form-title">التسجيل</h2>

        <div className="form-group">
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input ${errors.name ? 'input-error' : ''}`}
            placeholder="أدخل اسمك"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">رقم الموبايل</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input ${errors.phone ? 'input-error' : ''}`}
            placeholder="أدخل رقم الموبايل المصري"
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">العنوان</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`input ${errors.address ? 'input-error' : ''}`}
            placeholder="أدخل عنوانك"
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="additionalPhone">رقم موبايل إضافي (اختياري)</label>
          <input
            type="tel"
            name="additionalPhone"
            value={formData.additionalPhone}
            onChange={handleChange}
            className="input"
            placeholder="أدخل رقم موبايل إضافي (اختياري)"
          />
        </div>

        <button type="submit" className="submit-button">
          إرسال
        </button>
      </form>
    </div>
  );
};

export default ValidationForm;
