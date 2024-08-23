import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';  // Custom Calendar component
import './HomePage.css';

const HomePage = () => {
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
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Smt. Sulochanadevi Singhania School</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#events" className="nav-link">Events</a>
          </li>
          <li className="nav-item">
            <a href="#calendar" className="nav-link">Calendar</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/signup" className="nav-link">Sign Up / Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Smt. Sulochanadevi Singhania School</h1>
          <p>Empowering young minds to reach their full potential</p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="events" className="events">
          <h2>Upcoming Events</h2>
          <div className="event-cards">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.picture} alt={event.title} />
                <h3>{event.title}</h3>
                <p>Hosted by: {event.hostName}</p>
                <Link to="/login">View Details</Link>
              </div>
            ))}
          </div>
        </section>
        <section id="calendar" className="calendar">
          <h2>School Calendar</h2>
          <Calendar />
        </section>
        <section id="about" className="about">
          <h2>About Us</h2>
          <p>We are dedicated to providing quality education and a nurturing environment for our students.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Smt. Sulochanadevi Singhania School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
