// src/components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Dashboard.css';

const Dashboard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        name: data.name,
        date: data.date
      });
      setMessage('Event created successfully!');
    } catch (error) {
      setMessage('Error creating event: ' + error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Event Name</label>
          <input {...register('name', { required: true })} />
          {errors.name && <p>Event name is required</p>}
        </div>
        <div>
          <label>Event Date</label>
          <input type="date" {...register('date', { required: true })} />
          {errors.date && <p>Event date is required</p>}
        </div>
        <button type="submit">Create Event</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
