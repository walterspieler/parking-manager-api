const { ParkingSpacesService } = require('./services/parking-spaces.service');

class ParkingSpacesController {
  constructor() {
    this.parkingSpacesService = new ParkingSpacesService();
  }

  createParkingSpace(ctx) {
    const newParkingSpace = ctx.request.body.parkingSpace;
    return this.parkingSpacesService
      .create(newParkingSpace)
      .then(parkingSpace => {
        ctx.body = parkingSpace;
      });
  }
  updateParkingSpace(ctx) {
    const id = ctx.params.id;
    const upateParkingSpaceDto = ctx.request.body.parkingSpace;
    return this.parkingSpacesService
      .updateById(id, upateParkingSpaceDto)
      .then(parkingSpace => {
        ctx.body = parkingSpace;
      });
  }
  findParkingSpaceByStatus(ctx) {
    const available = ctx.available;
    const floor = ctx.query.floor;
    return this.parkingSpacesService
      .find({ available, floor })
      .then(parkingSpace => {
        ctx.body = parkingSpace;
      });
  }
  findParkingSpace(ctx) {
    const id = ctx.params.id;
    return this.parkingSpacesService.findById(id).then(parkingSpace => {
      ctx.body = parkingSpace;
    });
  }
  deleteParkingSpace(ctx) {
    const id = ctx.params.id;
    return this.parkingSpacesService.deleteById(id).then(() => {
      ctx.body = `ParkingSpace ${id} deleted`;
    });
  }
}

module.exports = { ParkingSpacesController };
