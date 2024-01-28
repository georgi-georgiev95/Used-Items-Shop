const express = require('express');

const { PORT } = require('./utils/constants')
const router = require('./router');
const expressConfig = require('./config/expressConfig');

const app = express();
expressConfig(app);
app.use(router);

app.listen(PORT, () => `App is listening on port: ${PORT}`);