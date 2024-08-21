// src/components/Events/Events.js

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([
    { id: 'test1', name: 'Test Event 1', date: '2024-08-15', joined: false },
    { id: 'test2', name: 'Test Event 2', date: '2024-08-16', joined: false }
  ]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '' });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userId] = useState('user123'); // Replace with actual user ID

  useEffect(() => {
    console.log('Events component mounted');
    console.log('Events list:', events);
  }, [events]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = async () => {
    try {
      const eventsCollection = collection(db, 'events');
      await addDoc(eventsCollection, { ...newEvent, participants: [] });
      setNewEvent({ name: '', date: '' });

      const eventSnapshot = await getDocs(eventsCollection);
      const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventList);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const handleJoinEvent = async (eventId) => {
    try {
      console.log(`Joining event with ID: ${eventId}`);
      const eventDoc = doc(db, 'events', eventId);
      await updateDoc(eventDoc, {
        participants: arrayUnion(userId)
      });

      const updatedEvents = events.map(event => 
        event.id === eventId ? { ...event, joined: true } : event
      );
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  const filteredEvents = events.filter(event => event.date === selectedDate.toISOString().split('T')[0]);

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
      <Calendar 
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <div className="event-list">
        <h2>Events on {selectedDate.toDateString()}</h2>
        <ul>
          {filteredEvents.length > 0 ? filteredEvents.map((event) => (
            <li key={event.id}>
              <span>{event.name} - {event.date}</span>
              <button onClick={() => handleJoinEvent(event.id)} disabled={event.joined}>
                {event.joined ? 'Joined' : 'Join Event'}
              </button>
            </li>
          )) : <li>No events on this date</li>}
        </ul>
      </div>
    </div>
  );
}

export default Events;
