const jwt = (req, res, next) => {
  const token = req.get("Authorization");
  if (valid_token) {
    next();
  }
  res.status(401).send();
}

module.exports = jwt;