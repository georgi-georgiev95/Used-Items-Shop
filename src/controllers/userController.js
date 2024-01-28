const router = require('express').Router();

const {TOKEN } = require('../utils/constants');
const userService = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        await userService.register(userData);
        res.redirect('/');
    } catch (err) {
        throw new Error(err);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);
        res.cookie(TOKEN, token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        throw new Error(err);
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN);

    res.redirect('/');
})


module.exports = router;