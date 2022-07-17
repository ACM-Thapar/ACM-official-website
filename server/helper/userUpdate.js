const User = require('../models/User');

async function userUpdate(userArray, field, field_id, remove = false) {
  try {
    await Promise.all(
      userArray.map(async (userId) => {
        const user = await User.findById(userId);
        if (!remove) {
          let set = new Set(user[field]);
          set.add(field_id);
          user[field] = [...set];
          await user.save();
        } else if (remove) {
          user[field] = user[field].filter(
            (id) => id.toString() !== field_id.toString(),
          );
          await user.save();
        }
      }),
    );
  } catch (err) {
    return;
  }
}

module.exports = { userUpdate };
