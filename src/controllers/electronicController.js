const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const electronicService = require('../services/electronicService');

router.get('/catalog', async (req, res) => {
    const electronics = await electronicService.getAll().lean();
    res.render('items/catalog', { electronics });
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

router.get('/details/:itemId', async (req, res) => {
    const itemData = await electronicService.getOne(req.params.itemId).lean();
    console.log(itemData);
    res.render('items/details', {itemData});
})

module.exports = router;