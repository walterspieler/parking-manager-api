const { BookingController } = require('./bookings.controller');

describe('Booking controller', () => {
  let controller;
  let contextMock = {
    request: {
      body: {
        user_id: 'user-id',
        parking_space_id: 'parking-space-id',
      },
    },
  };
  beforeAll(() => {
    controller = new BookingController();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#assign', () => {
    it('should call assign method from booking service', done => {
      spyOn(controller.bookingService, 'assign').and.callFake(async () => {
        return await null;
      });
      controller
        .assign(contextMock, () => {})
        .then(() => {
          expect(controller.bookingService.assign).toHaveBeenCalledWith(
            'user-id',
            'parking-space-id',
          );
          done();
        });
    });
  });
});
