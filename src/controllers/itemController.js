const router = require('express').Router();

const {isAuth } = require('../middlewares/authMiddleware');

router.get('/catalog', (req, res) => {
    res.render('items/catalog')
});

router.get('/create', isAuth, (req, res) => {
    res.render('items/create');
});

router.get('/search', (req, res) => {
    res.render('items/search');
});

module.exports = router;