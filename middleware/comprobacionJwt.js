const jwt = require("jsonwebtoken");

const comprobacionJwt = (req, res, next) => {
  const token = req.header("auth-token");
  try {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verifyToken;
    next();
  } catch (error) {
    res.status(400).json("Token no es valido");
  }
};

module.exports = comprobacionJwt;
