class TypeController {

  async createType(request, response) {
    return response.json({create: true})
  }
  async getAllType(request, response) {
    return response.json({getAll: true})
  }
  async updateType(request, response) {
    return response.json({update: true})
  }
  async deleteType(request, response) {
    return response.json({delete: true})
  }
}

module.exports = TypeController