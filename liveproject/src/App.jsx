import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Components_temp/Sidebar';
import Header from './Components_temp/Header';
import More from './pages/More';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendar from "./pages/Calendar";
import Attendance from './pages/Attendance';
import AttendanceSummary from './pages/AttendanceSummary';
import Performance from './pages/Performance';
import EmployeeManagement from './pages/EmployeeManagement';
import Profile from './pages/Profile';

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
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/attendance/AttendanceSummary" element={<AttendanceSummary />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/more" element={<More />} />
            <Route path="/employee-management" element={<EmployeeManagement />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/employee-engagement" element={<div>Employee Engagement Page</div>} />
            <Route path="/hr-letters" element={<div>HR Letters Page</div>} />
            <Route path="/travel" element={<div>Travel Page</div>} />
            <Route path="/tasks" element={<div>Tasks Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
