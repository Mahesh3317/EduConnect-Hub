import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import EventList from '../Events/EventList';

const StudentDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsData = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({ id: doc.id, ...doc.data() });
      });
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <EventList events={events} />
    </div>
  );
};

export default StudentDashboard;
