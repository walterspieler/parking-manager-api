const { ParkingSpace } = require('../model/parking-space.model');
class ParkingSpacesService {
  async create(parkingSpaceDto) {
    return await ParkingSpace.create(parkingSpaceDto);
  }
  async findById(id) {
    return await ParkingSpace.findByPk(id);
  }
  async find(params) {
    return await ParkingSpace.findAll({ where: { ...params } });
  }
  async updateById(id, updateParkingSpaceDto) {
    return await ParkingSpace.update(updateParkingSpaceDto, { where: { id } });
  }
  async deleteById(id) {
    return await ParkingSpace.destroy({ where: { id } });
  }
}

module.exports = { ParkingSpacesService };
