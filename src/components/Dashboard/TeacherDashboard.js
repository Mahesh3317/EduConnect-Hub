import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import EventForm from '../Events/EventForm';

const TeacherDashboard = () => {
  const [events, setEvents] = useState([]);

  const createEvent = async (event) => {
    try {
      const docRef = await addDoc(collection(db, 'events'), event);
      setEvents([...events, { id: docRef.id, ...event }]);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <EventForm onSubmit={createEvent} />
    </div>
  );
};

export default TeacherDashboard;
