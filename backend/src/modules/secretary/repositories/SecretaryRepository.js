const connection = require('../../../shared/database/connection');

class Secretaryrepository {
  async checkUserEmail(email) {
    return connection('secretary').where({ email }).first();
  }
  async createUser(payload) {
    return connection.transaction(async trx =>
      trx('secretary').insert(payload).returning('*')
    );
  }
  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }
}

module.exports = Secretaryrepository;
