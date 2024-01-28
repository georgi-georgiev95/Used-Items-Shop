const Electronic = require('../models/Electronic');

exports.create = (electronicData) => Electronic.create(electronicData);

exports.getAll = () => Electronic.find();

exports.getOne = (id) => Electronic.findById(id);