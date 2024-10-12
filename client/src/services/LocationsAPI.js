const LocationsAPI = {
    getAllLocations: async () => {
        return await fetch('/api/locations').then((response) => response.json());
    },
};

export default LocationsAPI;