const express = require('express');
const routes = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
routes.get('/', (req, res) => res.send('Auth route'));

module.exports = routes;