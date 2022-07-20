const User = require('../models/User');

async function userUpdate(userArray, field, field_id, remove = false) {
  try {
    await Promise.all(
      userArray.map(async (userId) => {
        let user = await User.findById(userId);
        console.log(user);
        if (!remove) {
          // let set = new Set(user[field]);
          user[field].push(field_id);
          // set.add(field_id);
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
