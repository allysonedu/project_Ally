class AssistedController {
  async createAssisted(request, response) {
    return response.json({create: true})
  }
  async getAllAssisted(request, response) {
    return response.json({getAll: true})
  }
  async updateAssisted(request, response) {
    return response.json({update: true})
  }
  async deleteAssisted(request, response) {
    return response.json({delete: true})
  }
}

module.exports = AssistedController