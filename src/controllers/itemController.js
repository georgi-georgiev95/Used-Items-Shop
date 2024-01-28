const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const electronicService = require('../services/electronicService');

router.get('/catalog', (req, res) => {
    res.render('items/catalog')
});

router.get('/create', isAuth, (req, res) => {
    res.render('items/create');
});

router.post('/create', isAuth, async (req, res) => {
    const electronicData = {
        ...req.body,
        owner: req.user._id
    };

    await electronicService.create(electronicData);

    res.redirect('/item/catalog');
});

router.get('/search', (req, res) => {
    res.render('items/search');
});

module.exports = router;