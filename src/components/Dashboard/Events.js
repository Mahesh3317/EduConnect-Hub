// src/components/Events/Events.js

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '' });

  // Fetch events from Firestore when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'events');
        const eventSnapshot = await getDocs(eventsCollection);
        const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventList);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Add a new event to Firestore
  const handleAddEvent = async () => {
    try {
      const eventsCollection = collection(db, 'events');
      await addDoc(eventsCollection, newEvent);
      setNewEvent({ name: '', date: '' });

      // Fetch events again to update the list
      const eventSnapshot = await getDocs(eventsCollection);
      const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventList);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="event-creation">
        <input
          type="text"
          name="name"
          value={newEvent.name}
          onChange={handleInputChange}
          placeholder="Event Name"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="event-list">
        <h2>Upcoming Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.name} - {event.date}
              <button>Join Event</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;
