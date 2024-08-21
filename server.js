const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Basic route to check if the bot is running
app.get('/ping', (req, res) => {
    res.send('Bot is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Bot is running on port ${PORT}`);
});
