const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');

module.exports = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(cookieParser());
    app.use(auth);
}