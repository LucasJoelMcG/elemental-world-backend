const db = require("../services/firestore");

const login = async (username,password) => {
    const user = await db.getOne('users', username);
    return user;
}

module.exports = { login }