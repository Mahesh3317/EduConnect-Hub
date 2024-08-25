import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './ClubForm.css'; // Ensure this path is correct

const ClubForm = ({ onSubmit }) => {
  const [clubData, setClubData] = useState({
    name: '',
    description: '',
    picture: '',
    hostName: '',
  });

  const handleChange = (e) => {
    setClubData({ ...clubData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(clubData);
    setClubData({
      name: '',
      description: '',
      picture: '',
      hostName: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="club-form">
      <h3>Create Club</h3>
      <input
        type="text"
        name="name"
        placeholder="Club Name"
        value={clubData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={clubData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="picture"
        placeholder="Club Picture URL"
        value={clubData.picture}
        onChange={handleChange}
      />
      <input
        type="text"
        name="hostName"
        placeholder="Host Name"
        value={clubData.hostName}
        onChange={handleChange}
      />
      <button type="submit">Create Club</button>
    </form>
  );
};

export default ClubForm;
