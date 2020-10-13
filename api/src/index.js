const express = require('express');
const port = process.env.POPT ?? 8000;

const app = express();

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly');
});

app.listen(port, () => {
    console.log(`Server running on the http://localhost:${port}`);
});
