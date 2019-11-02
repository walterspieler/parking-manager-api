const { ParkingSpacesController } = require('./parking-spaces.controller');
const {
  ParkingSpaceMock,
  CreateParkingSpaceMockDto,
  UpdateParkingSpaceMockDto,
} = require('./mocks/parking-space.mock');

describe('ParkingSpaces controller', () => {
  let controller;
  beforeAll(() => {
    controller = new ParkingSpacesController();
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('#createParkingSpace', () => {
    it('should call create method from ParkingSpaceservice', done => {
      const contextMock = {
        request: {
          body: {
            parkingSpace: CreateParkingSpaceMockDto,
          },
        },
      };
      spyOn(controller.parkingSpacesService, 'create').and.callFake(
        async () => {
          return await null;
        },
      );
      controller.createParkingSpace(contextMock).then(() => {
        expect(controller.parkingSpacesService.create).toHaveBeenCalledWith(
          CreateParkingSpaceMockDto,
        );
        done();
      });
    });
  });
  describe('#updateParkingSpaceById', () => {
    it('should call updateParkingSpaceById method from ParkingSpaceservice', done => {
      const contextMock = {
        params: { id: 1 },
        request: {
          body: {
            parkingSpace: UpdateParkingSpaceMockDto,
          },
        },
      };
      spyOn(controller.parkingSpacesService, 'updateById').and.callFake(
        async () => {
          return await { ...ParkingSpaceMock, ...UpdateParkingSpaceMockDto };
        },
      );
      controller.updateParkingSpace(contextMock).then(parkingSpace => {
        expect(controller.parkingSpacesService.updateById).toHaveBeenCalledWith(
          1,
          UpdateParkingSpaceMockDto,
        );
        done();
      });
    });
  });
  describe('#findParkingSpaceById', () => {
    it('should call findById method from ParkingSpaceservice', done => {
      const contextMock = {
        params: { id: 1 },
      };
      spyOn(controller.parkingSpacesService, 'findById').and.callFake(
        async () => {
          return await ParkingSpaceMock;
        },
      );
      controller.findParkingSpace(contextMock).then(() => {
        expect(controller.parkingSpacesService.findById).toHaveBeenCalledWith(
          1,
        );
        done();
      });
    });
  });
  describe('#findParkingSpaceByStatus', () => {
    it('should call find method from ParkingSpaceservice', done => {
      const contextMock = {
        available: true,
        query: { floor: 1 },
      };
      spyOn(controller.parkingSpacesService, 'find').and.callFake(async () => {
        return await [ParkingSpaceMock];
      });
      controller.findParkingSpaceByStatus(contextMock).then(() => {
        expect(controller.parkingSpacesService.find).toHaveBeenCalledWith({
          available: true,
          floor: 1,
        });
        done();
      });
    });
  });
  describe('#deleteParkingSpaceById', () => {
    it('should call create method from ParkingSpaceservice', done => {
      const contextMock = {
        params: { id: 1 },
      };
      spyOn(controller.parkingSpacesService, 'deleteById').and.callFake(
        async () => {
          return await null;
        },
      );
      controller.deleteParkingSpace(contextMock).then(() => {
        expect(controller.parkingSpacesService.deleteById).toHaveBeenCalledWith(
          1,
        );
        done();
      });
    });
  });
});
