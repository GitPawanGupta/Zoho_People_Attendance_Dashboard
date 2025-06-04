// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

import Sidebar from './Components_temp/Sidebar';
// import TopBanner from '../Components_temp/TopBanner';
import Dashboard from './pages/Dashboard';
import Calendar from "./pages/Calendar";

import Home from './pages/Home';
import Header from './Components_temp/Header';
import { WidthFull } from '@mui/icons-material';
// import Leave from './pages/Leave';
// import Attendance from './pages/Attendance';
// import TimeTracker from './pages/TimeTracker';
// import Performance from './pages/Performance';
// import Files from './pages/hr-letters';
// import More from './pages/More';
// import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '20px', flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/calendar" element={<Calendar />} />
             <Route path="/organization" element={<div>Organization Page</div>} />
            {/* <Route path ="/header" element={<Header />} />  */}
            {/* <Route path="/leave" element={<Leave />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/time" element={<TimeTracker />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/hr-letters" element={<HRLetters />} />
            <Route path="/more" element={<More />} />
            <Route path="/reports" element={<Reports />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
