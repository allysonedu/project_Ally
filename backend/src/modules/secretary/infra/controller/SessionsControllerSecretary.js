const SecretaryRepository = require('../../repositories/SecretaryRepository');

const SessionsServiceSecretary = require('../../services/SessionsServiceSecretary');

const secretaryRepository = new SecretaryRepository();

class SessionsControllerSecretary {
  async login(request, response) {
    const sessionsServiceSecretary = new SessionsServiceSecretary(
      secretaryRepository
    );

    const user = await sessionsServiceSecretary.execute(request.body);

    return response.json(user);
  }
}

module.exports = SessionsControllerSecretary;
