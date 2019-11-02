const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const { ApiModule } = require('./api/api.module');
const { Database } = require('./core/database.service');

async function bootstrap() {
  const app = new Koa();
  const router = new Router();
  const apiModule = new ApiModule();

  app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(apiModule.router.routes());

  await app.listen(3000, () => {
    Database.connnect();
    console.log('API listening on port 3000');
  });
}
bootstrap();
