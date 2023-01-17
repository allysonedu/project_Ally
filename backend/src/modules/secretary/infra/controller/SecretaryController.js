const CreateNewSecretaryService = require('../../services/CreateNewSecretaryService');

const SecretaryRepository = require('../../repositories/SecretaryRepository');

const UpdateUserAvatar = require('../../services/UpdateUserAvatar');

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

  async updateUserAvatar(request, response) {
    console.log(request.file);
    const updateAvatar = new UpdateUserAvatar(secretaryRepository);

    const updatedAvatar = await updateAvatar.execute({
      userId: request.user.id,
      avatarFileName: request.file.filename,
    });
    return response.json(updatedAvatar);
  }
}
module.exports = SecretaryController;
