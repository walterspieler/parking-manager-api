const { User } = require('../model/user.model');
class UsersService {
  async create(userDto) {
    return await User.create(userDto);
  }
  async findById(id) {
    return await User.findByPk(id);
  }
  async updateById(id, updateUserDto) {
    return await User.update(updateUserDto, { where: { id } });
  }
  async deleteById(id) {
    return await User.destroy({ where: { id } });
  }
}

module.exports = { UsersService };
