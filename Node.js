const express = require('express');
const app = express();
const PORT = 3000;

let currentToken = 50; // Example starting token number

app.use(express.json());

// Get current token
app.get('/api/token', (req, res) => {
    res.json({ token: currentToken });
});

// Update token (mockup)
app.post('/api/token', (req, res) => {
    currentToken = Math.max(0, currentToken - 1); // Decrease token number, ensure it doesn't go below 0
    res.json({ token: currentToken });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
