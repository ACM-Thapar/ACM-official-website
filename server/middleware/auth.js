const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    if (req.cookies[process.env.COOKIE_NAME]) {
      const decoded = jwt.verify(
        req.cookies[process.env.COOKIE_NAME],
        process.env.JWT_SECRET,
      );

      const user = await User.findOne({ _id: decoded.user });

      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json('Unauthorized user');
      }
    } else {
      return res.status(401).json('Unauthorized');
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
// module.exports = {auth,admin};
module.exports = auth;
