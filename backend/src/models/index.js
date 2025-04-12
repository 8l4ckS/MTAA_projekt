/*const sequelize = require('../config/database');
const User = require('./User');
const Activity = require('./Activity');
const Message = require('./Message');

// Definovanie vzťahov medzi modelmi
User.hasMany(Activity, { foreignKey: 'user_id' });
Activity.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Message, { foreignKey: 'sender_id' });
Message.belongsTo(User, { foreignKey: 'sender_id' });

module.exports = {
  sequelize,
  User,
  Activity,
  Message
};*/

const sequelize = require('../config/database');

// Import modelov
const User = require('./User')(sequelize);
const Activity = require('./Activity')(sequelize);
const Message = require('./Message')(sequelize);

// Definovanie asociácií
User.hasMany(Activity, { foreignKey: 'user_id' });
Activity.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Message, { 
  as: 'sentMessages',
  foreignKey: 'sender_id' 
});
User.hasMany(Message, { 
  as: 'receivedMessages',
  foreignKey: 'receiver_id' 
});

Message.belongsTo(User, { as: 'sender', foreignKey: 'sender_id' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiver_id' });

module.exports = {
  sequelize,
  User,
  Activity,
  Message
};