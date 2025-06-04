import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
import './calendar.css'; 

const CalendarPage = () => {
  const events = [
    {
      title: 'Absent',
      date: '2025-06-02',
      display: 'block',
      className: 'absent',
    },
    {
      title: 'Absent',
      date: '2025-06-03',
      display: 'block',
      className: 'absent',
    },
    {
      title: 'Present\n10:19 Hrs',
      date: '2025-06-04',
      display: 'block',
      className: 'present',
    }
  ];

  return (
    <Box sx={{ p: 3 , position:'relative', top: '100px', left: '20', right: '30', bottom: '0', overflowY: 'auto'}}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'title',
          center: '',
          right: 'prev,next today',
        }}
        events={events}
        fixedWeekCount={false}
        dayMaxEventRows={true}
        height="auto"
      />
    </Box>
  );
};

export default CalendarPage;
