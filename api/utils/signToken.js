import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

function signToken(payload) {
    return jwt.sign(payload, secret);
}

export default signToken;