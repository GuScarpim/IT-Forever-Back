const express = require('express');
const router = express.Router();
const verifyJWT = require('../Token/jwt');
const controller = require('../Controller/UserController');

router.get('/profiles', verifyJWT, controller.getUsers);
router.post('/login', controller.login);
router.post('/logout', controller.logout);

module.exports = router;