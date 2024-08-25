import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import EventList from '../Events/EventList';
import RegistrationForm from '../Events/RegistrationForm';

const StudentDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <EventList events={events} />
      <RegistrationForm />
    </div>
  );
};

export default StudentDashboard;
