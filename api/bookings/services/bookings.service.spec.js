const { BookingService } = require('./bookings.service');

describe('Booking Service', () => {
  let service;
  let contextMock = {
    request: {
      body: {
        userId: 'user-id',
        parkingSpaceId: 'parking-space-id',
      },
    },
  };
  beforeAll(() => {
    service = new BookingService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#assign', () => {
    it('should call ', () => {});
  });
});
