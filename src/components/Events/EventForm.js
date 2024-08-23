import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    picture: '',
    startDate: '',
    endDate: '',
    description: '',
    hostName: '',
    creatorType: '', // Either 'Teacher' or 'Senate Student'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      picture: '',
      startDate: '',
      endDate: '',
      description: '',
      hostName: '',
      creatorType: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Event</h3>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="picture"
        placeholder="Event Picture URL"
        value={formData.picture}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="hostName"
        placeholder="Host Name"
        value={formData.hostName}
        onChange={handleChange}
      />
      <select
        name="creatorType"
        value={formData.creatorType}
        onChange={handleChange}
      >
        <option value="">Select Creator</option>
        <option value="Teacher">Teacher</option>
        <option value="Senate Student">Senate Student</option>
      </select>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
