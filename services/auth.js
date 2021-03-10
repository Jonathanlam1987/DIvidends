const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = { algorithm: 'HS256', expiresIn: '1d'};

function sign(name) {
    return jwt.sign({ name }, jwtSecret, jwtOptions);

}