const { response } = require('express');

class AssistedsController {
  async createAssisteds(request, response) {
    return response.json({ ok: 'createAssisteds' });
  }

  async updateAssisteds(request, response) {
    return response.json({ ok: 'updateAssisteds' });
  }

  async deleteAssisteds(request, response) {
    return response.json({ ok: 'deleteAssisteds' });
  }

  async getAllAssisteds(request, response) {
    return response.json({ ok: 'getAllAssisteds' });
  }

  async getOneAssisteds(request, response) {
    return response.json({ ok: 'getOneAssisteds' });
  }
}

module.exports = AssistedsController;
