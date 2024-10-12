export const getAllEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    return data;
};

export const getEventById = async (id) => {
    const response = await fetch(`/api/events/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch event');
    }
    const data = await response.json();
    return data;
};