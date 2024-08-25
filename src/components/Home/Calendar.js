import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>August 2024</h2>
        <div className="calendar-controls">
          <button className="control-btn">Today</button>
          <button className="control-btn">&lt;</button>
          <button className="control-btn">&gt;</button>
          <select className="view-select">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
          </select>
        </div>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div className="calendar-day-header" key={day}>{day}</div>
        ))}
        {[...Array(31)].map((_, index) => (
          <div className="calendar-day" key={index}>
            <span className="date">{String(index + 1).padStart(2, '0')}</span>
            <div className="event">Event {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
