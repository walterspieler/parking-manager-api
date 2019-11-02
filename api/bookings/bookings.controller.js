const { BookingService } = require('./services/bookings.service');

class BookingController {
  constructor() {
    this.bookingService = new BookingService();
  }

  async assign(ctx) {
    const userId = ctx.request.body.user_id;
    const parkingSpaceId = ctx.request.body.parking_space_id;
    await this.bookingService.assign(userId, parkingSpaceId).then(data => {
      ctx.body = data;
    });
  }

  async deassign(ctx) {
    const userId = ctx.params.userId;
    await this.bookingService.deassign(userId).then(data => {
      ctx.body = data;
    });
  }

  async locate(ctx) {
    const userId = ctx.params.userId;
    await this.bookingService.locate(userId).then(data => {
      ctx.body = data;
    });
  }
}

module.exports = { BookingController };
