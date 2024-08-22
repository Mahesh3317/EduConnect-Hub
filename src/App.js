import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import SenateDashboard from './components/Dashboard/SenateDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
// import EventForm from './components/Events/EventForm';
// import EventList from './components/Events/EventList';
import LiveStream from './components/Features/LiveStream';
import OnlineExams from './components/Features/OnlineExams';
import StudyMaterials from './components/Features/StudyMaterials';
import Timetable from './components/Features/Timetable';
import HomePage from './components/Home/HomePage';

import './firebaseConfig'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/live-stream" element={<LiveStream />} />
        <Route path="/online-exams" element={<OnlineExams />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/timetable" element={<Timetable />} />

        {/* Protected routes */}
        <Route 
          path="/teacher-dashboard" 
          element={
            <ProtectedRoute>
              <TeacherDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/senate-dashboard" 
          element={
            <ProtectedRoute>
              <SenateDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/student-dashboard" 
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
