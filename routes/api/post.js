const express = require('express');
const routes = express.Router();

// @route   GET api/post
// @desc    Test route
// @access  Public
routes.get('/', (req, res) => res.send('Post route'));

module.exports = routes;