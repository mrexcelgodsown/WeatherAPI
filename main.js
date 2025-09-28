const express = require('express');
const app = express();
const port = 8080;

// Sample data from city_coordinates.csv
const cities = [
    { latitude: 52.367, longitude: 4.904, city: 'Amsterdam', country: 'Netherlands' },
    // ... other cities from your CSV
];

app.get('/api/cities', (req, res) => {
    res.json(cities);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});