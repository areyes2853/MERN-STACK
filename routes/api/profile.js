const express = require('express');
const routes = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
routes.get('/', (req, res) => res.send('Profile route'));

module.exports = routes;