const router = require('express').Router();

const authController = require('../controllers/auth');

router.get('/login', authController.getLogin);

module.exports = router;
