const { UsersController } = require('./users.controller');
const {
  UserMock,
  CreateUserMockDto,
  UpdateUserMockDto,
} = require('./mocks/user.mock');

describe('Users controller', () => {
  let controller;
  beforeAll(() => {
    controller = new UsersController();
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('#createUser', () => {
    it('should call create method from Userservice', done => {
      const contextMock = {
        request: {
          body: {
            user: CreateUserMockDto,
          },
        },
      };
      spyOn(controller.usersService, 'create').and.callFake(async () => {
        return await null;
      });
      controller.createUser(contextMock).then(() => {
        expect(controller.usersService.create).toHaveBeenCalledWith(
          CreateUserMockDto,
        );
        done();
      });
    });
  });
  describe('#updateUserById', () => {
    it('should call updateUserById method from Userservice', done => {
      const contextMock = {
        params: { id: 1 },
        request: {
          body: {
            user: UpdateUserMockDto,
          },
        },
      };
      spyOn(controller.usersService, 'updateById').and.callFake(async () => {
        return await { ...UserMock, ...UpdateUserMockDto };
      });
      controller.updateUser(contextMock).then(user => {
        expect(controller.usersService.updateById).toHaveBeenCalledWith(
          1,
          UpdateUserMockDto,
        );
        done();
      });
    });
  });
  describe('#findUserById', () => {
    it('should call create method from Userservice', done => {
      const contextMock = {
        params: { id: 1 },
      };
      spyOn(controller.usersService, 'findById').and.callFake(async () => {
        return await UserMock;
      });
      controller.findUser(contextMock).then(() => {
        expect(controller.usersService.findById).toHaveBeenCalledWith(1);
        done();
      });
    });
  });
  describe('#deleteUserById', () => {
    it('should call create method from Userservice', done => {
      const contextMock = {
        params: { id: 1 },
      };
      spyOn(controller.usersService, 'deleteById').and.callFake(async () => {
        return await null;
      });
      controller.deleteUser(contextMock).then(() => {
        expect(controller.usersService.deleteById).toHaveBeenCalledWith(1);
        done();
      });
    });
  });
});
