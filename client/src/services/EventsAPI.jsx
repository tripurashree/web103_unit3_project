export const getAllEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    return data;
};
