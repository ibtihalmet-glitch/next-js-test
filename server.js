// Simple Express server for the House of Ideas landing page
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const INSTAGRAMlink = 'https://www.instagram.com/houseofideas_club/?hl=en';

app.use(express.static(path.join(__dirname, 'public')));

// Small endpoint so the page gets its config from Node
app.get('/api/config', (req, res) => {
  res.json({ instagram: INSTAGRAMlink, year: new Date().getFullYear() });
});

app.listen(PORT, () => console.log(`House of Ideas running on http://localhost:${PORT}`));
 