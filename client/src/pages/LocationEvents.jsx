import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import '../css/LocationEvents.css';

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);

    // Fetch location data and events when the component mounts
    useEffect(() => {
        const fetchLocationAndEvents = async () => {
            try {
                // Fetch location data
                const locationResponse = await fetch(`/api/locations/${index}`);
                const locationData = await locationResponse.json();
                setLocation(locationData);

                // Fetch events for the location
                const eventsResponse = await fetch(`/api/events?location_id=${locationData.id}`);
                const eventsData = await eventsResponse.json();
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchLocationAndEvents();
    }, [index]);

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} alt={`${location.name}`} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, eventIndex) =>
                        <Event
                            key={eventIndex} // Use eventIndex if there's no unique ID
                            id={eventIndex} // Optional: If you want to use index as a temporary ID
                            title={event.name} // Ensure this matches your event structure
                            date={event.date}
                            time={event.time || 'TBA'} // Use a fallback for time
                            image={event.image || 'default_image.jpg'} // Provide a default image if none exists
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    );
};

export default LocationEvents;