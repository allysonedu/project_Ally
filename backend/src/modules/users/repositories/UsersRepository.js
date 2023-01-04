const connection = require('../../../shared/database/connection');

class Usersrepository {
  async checkUserEmail(email) {
    return connection('users').where({ email }).first();
  }
  async createUser(payload) {
    return connection.transaction(async trx =>
      trx('users').insert(payload).returning('*')
    );
  }
  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }
}

module.exports = Usersrepository;
