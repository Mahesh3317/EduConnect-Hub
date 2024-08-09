
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Auth/Signup';
// import Login from './components/Auth/Login';
// import ForgotPassword from './components/Auth/ForgotPassword';
// import Dashboard from './components/Dashboard/Dashboard';
// import Events from './components/Dashboard/Events';
// import LiveStream from './components/Dashboard/LiveStream';
// import OnlineExams from './components/Dashboard/OnlineExams';
// import StudyMaterials from './components/Dashboard/StudyMaterials';
// import Timetable from './components/Dashboard/Timetable';
// import HomePage from './components/Home/HomePage';

// import './firebaseConfig'; // Import Firebase configuration
// import './App.css'; // Import global styles

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/live-stream" element={<LiveStream />} />
//         <Route path="/online-exams" element={<OnlineExams />} />
//         <Route path="/study-materials" element={<StudyMaterials />} />
//         <Route path="/timetable" element={<Timetable />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Dashboard/Events';
import LiveStream from './components/Dashboard/LiveStream';
import OnlineExams from './components/Dashboard/OnlineExams';
import StudyMaterials from './components/Dashboard/StudyMaterials';
import Timetable from './components/Dashboard/Timetable';
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/live-stream" element={<LiveStream />} />
        <Route path="/online-exams" element={<OnlineExams />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
}

export default App;


