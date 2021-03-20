const { verify } = require("jsonwebtoken");




async function authenticateUser(req, res, next) {
const jwtString = req.cookies.jwt;

if (!jwtString) {
    const err = new Error("Unauthorize");
    err.statusCode = 401;
    return next(err);
}

const name = await verify(jwtString);

if (!name) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    return next(err);
}

req.username = name;
next();
}

module.exports = {
    authenticateUser
}