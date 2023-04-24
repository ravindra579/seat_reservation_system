const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.route('/create').post(userController.createUser)
router.route('/get').get(userController.getAvailableSeats);

module.exports = router
