import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Cal = ()=> {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/events/events/')
      .then(response => {
        const eventsData = response.data.map(event => ({
          id: event.id,
          title: event.name,
          start: new Date(event.date),
          end: new Date(event.date),
          description: event.description
        }));
        setEvents(eventsData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={event => console.log(event)}
      />
    </div>
  );
}

export default Cal; 