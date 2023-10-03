const loginModel = require("../models/loginModel")

const login = async (req, res) => {

  const result = await loginModel.login('coldfusion','');
  res.send(result);
};

module.exports = { login }