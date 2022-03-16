const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
const pool = require('../utils/pool');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    const user = { id: '1', name: 'Test User', quote: 'This is a quote' };
    res.send(user);
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
