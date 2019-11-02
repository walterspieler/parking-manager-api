const Sequelize = require('sequelize');
const { Database } = require('../../../core/database.service');
const { User } = require('../../users/model/user.model');
const {
  ParkingSpace,
} = require('../../parking-spaces/model/parking-space.model');

const Model = (sequelize, type) => {
  return sequelize.define('booking', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: type.INTEGER,
      unique: true,
    },
    parking_space_id: {
      type: type.INTEGER,
      unique: true,
    },
    ends_at: {
      type: type.DATE,
    },
  });
};
const Booking = Model(Database.sequelize, Sequelize);
Booking.belongsTo(User, { foreignKey: 'user_id' });
Booking.belongsTo(ParkingSpace, { foreignKey: 'parking_space_id' });

module.exports = {
  Booking,
};
