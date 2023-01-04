const { generateHash } = require('../../../shared/utils/encrypt');

class CreateNewSecretaryService {
  constructor(secretaryRepository) {
    this.secretaryRepository = secretaryRepository;
  }

  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });

    const user = await this.secretaryRepository.createUser(payload);

    return user;
  }
}
module.exports = CreateNewSecretaryService;
