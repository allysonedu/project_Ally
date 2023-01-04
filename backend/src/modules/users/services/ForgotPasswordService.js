const crypto = require('crypto');

const AppError = require('../../../shared/errors/AppError');

const {
  forgotPassword,
} = require('../../../shared/providers/MailProvider/templates');

class ForgotPasswordService {
  constructor(usersRepository, mailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ email }) {
    const user = await this.usersRepository.checkUserEmail(email);

    if (!user) {
      throw new AppError('User not found');
    }

    const token = parseInt(crypto.randomBytes(3).toString('hex'), 16)
      .toString()
      .substring(0, 6);

    const data = {
      user_id: user.id,
      token,
    };

    const forgot = await this.usersRepository.saveTokenInDb(data);

    const message = forgotPassword(user.name, token);

    await this.mailProvider.sendMail({
      to: email,
      subject: 'Esqueci minha senha [USERS]',
      template: message,
    });

    return forgot;
  }
}
module.exports = ForgotPasswordService;
