const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = fetchUser;
