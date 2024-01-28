const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.render('items/catalog')
});

router.get('/create', (req, res) => {
    res.render('items/create');
});

router.get('/search', (req, res) => {
    res.render('items/search');
});

module.exports = router;