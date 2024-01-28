const express = require('express');

const { PORT } = require('./utils/constants')
const router = require('./router');

const app = express();

app.use(router);

app.listen(PORT, () => `App is listening on port: ${PORT}`);