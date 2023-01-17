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
  /*  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }
  */

  async getUserById(userId) {
    return connection('secretary').where({ id: userId }).first();
  }

  async updateUser(payload) {
    return connection('secretary')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }
}

module.exports = Secretaryrepository;
