const UserMock = {
  id: 1,
  first_name: 'John',
  last_name: 'Wick',
  license_plate: '123-ABC-54',
};

const CreateUserMockDto = {
  first_name: 'John',
  last_name: 'Wick',
  license_plate: '123-ABC-54',
};

const UpdateUserMockDto = {
  last_name: 'Doe',
};

module.exports = { UserMock, CreateUserMockDto, UpdateUserMockDto };
