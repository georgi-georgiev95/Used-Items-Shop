const express = require('express');

const { PORT } = require('./utils/constants')
const router = require('./router');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(router);

app.listen(PORT, () => `App is listening on port: ${PORT}`);