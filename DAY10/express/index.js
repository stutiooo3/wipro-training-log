const express = require('express');

const app = express();
const PORT = 4000;

// Home Route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Express Server"
    });
});

// Dynamic Route
app.get('/user/:username', (req, res) => {
    const username = req.params.username;

    res.json({
        success: true,
        message: `Hello ${username}`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});