const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.use(express.urlencoded({extended: false}))
}