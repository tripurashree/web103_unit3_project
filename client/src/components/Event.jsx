import React, { useState, useEffect } from 'react';
import '../css/Event.css';
import { getEventById } from '../services/EventsAPI';

const Event = ({ id }) => {
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("Event ID is missing.");
            return;
        }
        const fetchEvent = async () => {
            try {
                console.log(`Fetching event with id: ${id}`);
                const eventData = await getEventById(id);
                setEvent(eventData);
            } catch (error) {
                console.error("Failed to fetch event:", error.message);
                setError(`Failed to load event with id ${id}. ${error.message}`);
            }
        };

        fetchEvent();
    }, [id]);

    if (error) return <div className="error-message">{error}</div>;
    if (!event) return <div className="loading-message">Loading event {id}...</div>;

    const formatTime = (timeString) => {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        return new Date(0, 0, 0, hours, minutes).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const calculateRemainingTime = () => {
        const now = new Date();
        const eventDate = new Date(`${event.date}T${event.time || '00:00'}`);
        const difference = eventDate - now;

        if (difference < 0) {
            return "Event has passed";
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        return `${days}d ${hours}h ${minutes}m remaining`;
    };

    return (
        <article className='event-information'>
            {event.image && <img src={event.image} alt={event.title} />}

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br />
                        {formatTime(event.time)}
                    </p>
                    <p id={`remaining-${event.id}`}>{calculateRemainingTime()}</p>
                    <p>{event.description}</p>
                </div>
            </div>
        </article>
    );
};

export default Event;