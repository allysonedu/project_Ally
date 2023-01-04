const UsersRepository = require('../repositories/UsersRepository');

const AppError = require('../../../shared/errors/AppError');

const userRepository = new UsersRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, response, next ) {
    const { email } = request.body;

    const emailExists = await userRepository.checkUserEmail(email);
    if (emailExists) throw new AppError('Email already exists', 401);

    next();
  },
};