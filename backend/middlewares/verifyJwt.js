const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.accessToken;
  jwt.verify(token, process.env.JWT_SEC, (err, payload) => {
    if (err) {
      return res
        .status(403)
        .send({ operation: "error", message: "Token expired or failed" });
    }
    next();
  });
};
