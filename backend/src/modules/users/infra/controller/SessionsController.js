const UsersRepository = require('../../repositories/UsersRepository');

const SessionService = require('../../services/SessionService');

const userRepository = new UsersRepository();

class SessionsController {
  async login(request, response) {
    const sessionService = new SessionService(userRepository);

    const user = await sessionService.execute(request.body);

    return response.json(user);
  }
}

module.exports = SessionsController;