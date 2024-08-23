import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import EventForm from '../Events/EventForm';
import ResponseList from '../Events/ResponseList';

const SenateStudentDashboard = () => {
  const [events, setEvents] = useState([]);
  const [responses, setResponses] = useState([]);

  const createEvent = async (event) => {
    try {
      const docRef = await addDoc(collection(db, 'events'), event);
      setEvents([...events, { id: docRef.id, ...event }]);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  useEffect(() => {
    const fetchResponses = async () => {
      const querySnapshot = await getDocs(collection(db, 'responses'));
      const responseData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResponses(responseData);
    };

    fetchResponses();
  }, []);

  return (
    <div>
      <h1>Senate Student Dashboard</h1>
      <EventForm onSubmit={createEvent} />
      <ResponseList responses={responses} />
    </div>
  );
};

export default SenateStudentDashboard;
