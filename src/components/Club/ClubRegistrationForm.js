import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ClubRegistrationForm = ({ clubId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'clubResponses'), { ...formData, clubId });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } catch (error) {
      console.error('Error joining club:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="club-registration-form">
      <h3>Join Club</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Join Club</button>
    </form>
  );
};

export default ClubRegistrationForm;
