import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`);
        setEvents(response.data);
        setError(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(); // Initial fetch
    const interval = setInterval(fetchEvents, 15000); // Poll every 15 sec

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="App">
      <h1>GitHub Repository Events</h1>

      <ul>
        {loading && <li>Loading events...</li>}
        {error && !loading && <li>Error loading events.</li>}
        {!loading && !error && events.length === 0 && <li>No events yet.</li>}

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
