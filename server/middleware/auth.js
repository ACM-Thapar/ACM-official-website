const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

// const auth = async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     // Set token from Bearer token in header
//     token = req.headers.authorization.split(' ')[1];
//   } else {
//     return res.status(401).json({ msg: 'Token is not valid' });
//   }

//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorisation denied ' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({
//       _id: decoded.user,
//     }).select('-password');

//     if (!user) {
//       throw new Error();
//     }

//     req.token = token;
//     req.user = user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

const auth = async (req, res, next) => {
  try {
    if (req.cookies.JWT) {
      const decoded = jwt.verify(req.cookies.JWT, process.env.JWT_SECRET);

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
