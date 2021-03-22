const router = require('express').Router();

const authController = require('./controllers/authController');
const workController = require('./controllers/workController');

router.use('/auth', authController);
router.use('/work', workController);

module.exports = router;