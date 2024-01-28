const jwt = require('../lib/jwt');
const { SECRET, TOKEN } = require('../utils/constants');


exports.auth = async (req, res, next) => {
    const token = req.cookies[TOKEN];

    if (token) {
        //validate token
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;

            next();
        } catch (err) {
            res.clearCookie(TOKEN);
            return res.redirect('/user/login');
        }
    } else {
        next();
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/user/login');
    }

    next();
}
