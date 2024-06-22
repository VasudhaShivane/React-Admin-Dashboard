import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Typography } from '@mui/material';

const Calendar = () => {
  const events = [
    { title: 'Event 1', date: '2024-06-01' },
    { title: 'Event 2', date: '2024-06-02' },
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <Typography variant="h3">Calendar</Typography>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </div>
  );
};

export default Calendar;
