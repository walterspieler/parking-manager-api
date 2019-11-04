const { User } = require('./api/users/model/user.model');
const { Booking } = require('./api/bookings/model/booking.model');
const {
  ParkingSpace,
} = require('./api/parking-spaces/model/parking-space.model');

async function initDemo() {
  await Booking.drop();
  await ParkingSpace.drop();
  await User.drop();

  // CREATE USER TABLE
  await User.sync({ alter: true });

  await User.create({
    first_name: 'John',
    last_name: 'Wick',
    license_plate: '123_FCA_23',
  });
  await User.create({
    first_name: 'Sara',
    last_name: 'Connor',
    license_plate: '340_BEF_12',
  });
  await User.create({
    first_name: 'Luke',
    last_name: 'Skywalker',
    license_plate: '506_MPF_03',
  });

  // CREATE PARKING SPACE TABLE
  await ParkingSpace.sync({ alter: true });

  await ParkingSpace.create({
    floor: 1,
    number: 1,
  });
  await ParkingSpace.create({
    floor: 1,
    number: 2,
  });
  await ParkingSpace.create({
    floor: 1,
    number: 3,
  });
  await ParkingSpace.create({
    floor: 2,
    number: 1,
  });

  // CREATE BOOKING TABLE
  await Booking.sync({ alter: true });

  await Booking.create({
    user_id: 1,
    parking_space_id: 2,
  });
}
initDemo().catch(e => {
  console.log(e);
});
