const { ParkingSpacesService } = require('./parking-spaces.service');
const {
  CreateParkingSpaceMockDto,
  ParkingSpaceMock,
} = require('../mocks/parking-space.mock');
const { ParkingSpace } = require('../model/parking-space.model');

describe('ParkingSpaces service', () => {
  let service;
  beforeAll(() => {
    service = new ParkingSpacesService();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('#create', () => {
    it('should call create method from ParkingSpaceModel', done => {
      spyOn(ParkingSpace, 'create').and.returnValue(ParkingSpaceMock);
      service.create(CreateParkingSpaceMockDto).then(parkingSpace => {
        expect(parkingSpace).toEqual(ParkingSpaceMock);
        expect(ParkingSpace.create).toHaveBeenCalledWith(
          CreateParkingSpaceMockDto,
        );
        done();
      });
    });
  });
  describe('#findById', () => {
    it('should call findByPk method form ParkingSpaceModel', done => {
      spyOn(ParkingSpace, 'findByPk').and.returnValue(ParkingSpaceMock);
      service.findById(1).then(parkingSpace => {
        expect(parkingSpace).toEqual(ParkingSpaceMock);
        expect(ParkingSpace.findByPk).toHaveBeenCalledWith(1);
        done();
      });
    });
  });
  describe('#find', () => {
    it('should call find method form ParkingSpaceModel', done => {
      spyOn(ParkingSpace, 'findAll').and.returnValue([ParkingSpaceMock]);
      service.find({ available: true }).then(parkingSpace => {
        expect(parkingSpace).toEqual([ParkingSpaceMock]);
        expect(ParkingSpace.findAll).toHaveBeenCalledWith({
          where: { available: true },
        });
        done();
      });
    });
  });
  describe('#updateById', () => {
    it('should call update method form ParkingSpaceModel', done => {
      spyOn(ParkingSpace, 'destroy').and.returnValue(ParkingSpaceMock);
      service.deleteById(1).then(() => {
        expect(ParkingSpace.destroy).toHaveBeenCalledWith({
          where: { id: 1 },
        });
        done();
      });
    });
  });
});
