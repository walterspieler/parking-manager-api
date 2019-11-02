const { Booking } = require('../model/booking.model');
const {
  ParkingSpace,
} = require('../../parking-spaces/model/parking-space.model');

class BookingService {
  async assign(user_id, parking_space_id) {
    return await Booking.create({ user_id, parking_space_id }).then(
      async booking => {
        await ParkingSpace.update(
          { available: false },
          { where: { id: booking.parking_space_id } },
        );
        return booking;
      },
    );
  }

  async deassign(user_id) {
    const booking = await Booking.findOne({ where: { user_id } });
    return await Booking.destroy({ where: { user_id } })
      .then(() => {
        return ParkingSpace.update(
          { available: true },
          { where: { id: booking.parking_space_id } },
        );
      })
      .then(() => {
        return 'Success: This parking space is now available';
      });
  }

  async locate(user_id) {
    return await Booking.findOne({
      attributes: ['id'],
      where: { user_id },
      include: { model: ParkingSpace, right: true },
    });
  }
}

module.exports = { BookingService };
