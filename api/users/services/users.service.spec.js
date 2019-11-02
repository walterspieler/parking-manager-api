const { UsersService } = require('./users.service');
const { CreateUserMockDto, UserMock } = require('../mocks/user.mock');
const { User } = require('../model/user.model');

describe('Users service', () => {
  let service;
  beforeAll(() => {
    service = new UsersService();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('#create', () => {
    it('should call create method from UserModel', done => {
      spyOn(User, 'create').and.returnValue(UserMock);
      service.create(CreateUserMockDto).then(user => {
        expect(user).toEqual(UserMock);
        expect(User.create).toHaveBeenCalledWith(CreateUserMockDto);
        done();
      });
    });
  });
  describe('#findById', () => {
    it('should call findByPk method form UserModel', done => {
      spyOn(User, 'findByPk').and.returnValue(UserMock);
      service.findById(1).then(user => {
        expect(user).toEqual(UserMock);
        expect(User.findByPk).toHaveBeenCalledWith(1);
        done();
      });
    });
  });
  describe('#updateById', () => {
    it('should call findByPk method form UserModel', done => {
      spyOn(User, 'destroy').and.returnValue(UserMock);
      service.deleteById(1).then(() => {
        expect(User.destroy).toHaveBeenCalledWith({
          where: { id: 1 },
        });
        done();
      });
    });
  });
});
