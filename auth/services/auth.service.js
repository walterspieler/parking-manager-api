const jwt = require('jsonwebtoken');
const { env } = require('../../env');

class AuthGuard {
  async isAuthorized(ctx, next) {
    const authHeader = ctx.header.authorization;
    if (!authHeader) {
      throw false;
    }
    const token = authHeader.replace('Bearer ', '').trim();
    return new Promise((resolve, reject) => {
      jwt.verify(token, env.jwt_secret, err => {
        console.log(token, env.jwt_secret);

        if (err) {
          err.status = 400;
          ctx.body = err.message;
          ctx.app.emit('error', err, ctx);
          return reject();
        }
        return resolve(next());
      });
    });
  }
  retrieveToken(user) {
    return jwt.sign(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        id: user.id,
      },
      env.jwt_secret,
    );
  }
  async decodeToken(authHeader) {
    const token = authHeader.replace('Bearer ', '').trim();
    const decoded = await jwt.decode(token);
    return decoded;
  }
  async isAdmin(authHeader) {
    if (!authHeader) {
      return false;
    }
    const token = authHeader.replace('Bearer ', '').trim();
    const decoded = await jwt.decode(token);
    return decoded.role === 'admin';
  }
}
module.exports = { AuthGuard };
