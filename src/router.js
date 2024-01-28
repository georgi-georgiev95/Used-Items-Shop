const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');

router.use(homeController);
router.use('/user', userController);
router.use('/item', itemController);
router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;