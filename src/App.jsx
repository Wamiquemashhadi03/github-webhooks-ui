import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`);
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Invalid data format received from API');
        }
        console.log("Fetched Events:", response.data);  // Debug output
        setEvents(response.data);
      } catch (error) {
        console.error(' Error fetching events:', error);
      }
    };

    fetchEvents(); // Initial fetch
    const interval = setInterval(fetchEvents, 15000); // Poll every 15 sec

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <h1>GitHub Repository Events</h1>

      <ul>
        {events.length === 0 && <li>No events yet</li>}

        {events.map((event) => {
          const time = new Date(event.timestamp).toUTCString();

          if (event.action === 'PUSH') {
            return (
              <li key={event._id}>
                {event.author} pushed to {event.to_branch} on {time}
              </li>
            );
          }

          if (event.action === 'PULL_REQUEST') {
            return (
              <li key={event._id}>
                {event.author} submitted a pull request from {event.from_branch} to {event.to_branch} on {time}
              </li>
            );
          }

          if (event.action === 'MERGE') {
            return (
              <li key={event._id}>
                {event.author} merged {event.from_branch} to {event.to_branch} on {time}
              </li>
            );
          }

          return (
            <li key={event._id}>
              Unknown event: {JSON.stringify(event)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
