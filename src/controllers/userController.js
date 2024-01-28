const router = require('express').Router();

const userService = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    await userService.register(userData);

    res.redirect('/');
})


module.exports = router;