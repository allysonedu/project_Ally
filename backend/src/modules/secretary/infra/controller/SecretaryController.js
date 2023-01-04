const CreateNewSecretaryService = require('../../services/CreateNewSecretaryService');

const SecretaryRepository = require('../../repositories/SecretaryRepository');

const secretaryRepository = new SecretaryRepository();

class SecretaryController {
  async createSecretary(request, response) {
    const { name, email, password } = request.body;

    const createUser = new CreateNewSecretaryService(secretaryRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json({ user });
  }
  async getAllSecretary(request, response) {
    return response.json({ getAll: true });
  }
  async updateSecretary(request, response) {
    return response.json({ update: true });
  }
  async deleteSecretary(request, response) {
    return response.json({ delete: true });
  }
}
module.exports = SecretaryController;
