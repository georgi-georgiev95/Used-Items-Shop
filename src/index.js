const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { PORT, DB_URI } = require('./utils/constants')
const router = require('./router');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();

mongoose.connect(DB_URI)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

expressConfig(app);
handlebarsConfig(app);
app.use(router);

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));