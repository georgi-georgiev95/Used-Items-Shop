const express = require('express');

const { PORT } = require('./utils/constants')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.listen(PORT, () => `App is listening on port: ${PORT}`);