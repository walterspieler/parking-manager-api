const Router = require('@koa/router');
const { BookingController } = require('./bookings/bookings.controller');
const { UsersController } = require('./users/users.controller');
const {
  ParkingSpacesController,
} = require('./parking-spaces/parking-spaces.controller');

const { AuthGuard } = require('../auth/services/auth.service');

class ApiModule {
  constructor() {
    this.bookingController = new BookingController();
    this.usersController = new UsersController();
    this.parkingSpacesController = new ParkingSpacesController();
    this.authGuard = new AuthGuard();
    this.router = new Router({
      prefix: '/api',
    });
    this.router.use(
      ['/users', '/bookings', '/parking-spaces'],
      async (ctx, next) => await this.authGuard.isAuthorized(ctx, next),
    );
    const routes = [
      {
        path: '/',
        method: 'get',
        controller(ctx) {
          ctx.body = 'Welcome to Parking Manager API';
        },
      },
      {
        path: '/bookings',
        method: 'post',
        controller: ctx => this.bookingController.assign(ctx),
      },
      {
        path: '/bookings/:userId',
        method: 'del',
        controller: ctx => this.bookingController.deassign(ctx),
      },
      {
        path: '/bookings/:userId',
        method: 'get',
        controller: ctx => this.bookingController.locate(ctx),
      },
      {
        path: '/users',
        method: 'post',
        controller: ctx => this.usersController.createUser(ctx),
      },
      {
        path: '/users/:id',
        method: 'get',
        controller: ctx => this.usersController.findUser(ctx),
      },
      {
        path: '/users/:id',
        method: 'put',
        controller: ctx => this.usersController.updateUser(ctx),
      },
      {
        path: '/users/:id',
        method: 'del',
        controller: ctx => this.usersController.deleteUser(ctx),
      },
      {
        path: '/parking-spaces',
        method: 'post',
        controller: ctx => this.parkingSpacesController.createParkingSpace(ctx),
      },
      {
        path: '/parking-spaces/available',
        method: 'get',
        controller: ctx => {
          ctx.available = true;
          return this.parkingSpacesController.findParkingSpaceByStatus(ctx);
        },
      },
      {
        path: '/parking-spaces/occupied',
        method: 'get',
        controller: ctx => {
          ctx.available = false;
          return this.parkingSpacesController.findParkingSpaceByStatus(ctx);
        },
      },
      {
        path: '/parking-spaces/:id',
        method: 'get',
        controller: ctx => this.parkingSpacesController.findParkingSpace(ctx),
      },
      {
        path: '/parking-spaces/:id',
        method: 'put',
        controller: ctx => this.parkingSpacesController.updateParkingSpace(ctx),
      },
      {
        path: '/parking-spaces/:id',
        method: 'del',
        controller: ctx => this.parkingSpacesController.deleteParkingSpace(ctx),
      },
    ];
    this._assignRoutes(routes);
  }

  _assignRoutes(routes) {
    routes.map(route => {
      this.router[route.method](route.path, ctx => route.controller(ctx));
    });
  }
}

module.exports = { ApiModule };
