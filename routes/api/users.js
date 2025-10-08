const express = require('express');
const routes = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public
routes.get('/', (req, res) => res.send('User route'));

module.exports = routes;