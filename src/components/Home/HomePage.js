// src/components/Home/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './HomePage.css';

function HomePage() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = await getDocs(collection(db, 'events'));
      const eventsData = eventsCollection.docs.map(doc => doc.data());
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Smt. Sulochanadevi Singhania School</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Log In</Link>
          </li>
        </ul>
      </nav>
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Smt. Sulochanadevi Singhania School</h1>
          <p>Empowering young minds to reach their full potential</p>
        </div>
      </header>
      <main>
        <section className="about">
          <h2>About Us</h2>
          <p>We are dedicated to providing quality education and a nurturing environment for our students.</p>
        </section>
        <section className="programs">
          <h2>Our Programs</h2>
          <p>Explore our diverse range of programs designed to cater to all educational needs.</p>
        </section>
        <section className="events">
          <h2>Upcoming Events</h2>
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={({ date, view }) => {
              const event = events.find(e => new Date(e.date).toDateString() === date.toDateString());
              return event ? <p>{event.name}</p> : null;
            }}
          />
        </section>
        <section className="contact">
          <h2>Get in Touch</h2>
          <p>Contact us to learn more about our admissions process and schedule a visit.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Smt. Sulochanadevi Singhania School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
