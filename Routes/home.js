const express = require('express');

const homeController = require('../Controllers/home');
const errorController = require('../Controllers/error');
const router = express.Router();

router.get('/',homeController.ReadTodo);

/// Error 404
router.use(errorController.getNotFound);

module.exports = router;