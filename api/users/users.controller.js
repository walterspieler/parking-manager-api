const { UsersService } = require('./services/users.service');

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  createUser(ctx) {
    const newUser = ctx.request.body.user;
    return this.usersService.create(newUser).then(user => {
      ctx.body = user;
    });
  }
  updateUser(ctx) {
    const id = ctx.params.id;
    const upateUserDto = ctx.request.body.user;
    return this.usersService.updateById(id, upateUserDto).then(user => {
      ctx.body = user;
    });
  }
  findUser(ctx) {
    const id = ctx.params.id;
    console.log(ctx);

    return this.usersService.findById(id).then(user => {
      ctx.body = user;
    });
  }
  deleteUser(ctx) {
    const id = ctx.params.id;
    return this.usersService.deleteById(id).then(() => {
      ctx.body = `User ${id} deleted`;
    });
  }
}

module.exports = { UsersController };
