const path = require('path');
const fs = require('fs');

const AppError = require('../../../shared/errors/AppError');

const uploadConfig = require('../../../config/upload');

class UpdateUserAvatar {
  constructor(secretaryRepository) {
    this.secretaryRepository = secretaryRepository;
  }

  async execute({ userId, avatarFileName }) {
    const user = await this.secretaryRepository.getUserById(userId);
    if (!user) throw new AppError('User not found');

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    return this.secretaryRepository.updateUser({
      id: user.id,
      avatar: avatarFileName,
    });
  }
}

module.exports = UpdateUserAvatar;
