const nodemailer = require('nodemailer');

class MailProvider {
  constructor() {
    this.transport = nodemailer.createTransport({})
  }
}


module.exports = MailProvider