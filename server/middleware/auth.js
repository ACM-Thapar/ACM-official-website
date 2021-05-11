const jwt = require('jsonwebtoken');
const config = require('config');
require('dotenv').config();

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorisation denied ' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = auth;
