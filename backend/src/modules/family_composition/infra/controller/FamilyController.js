class FamilyController {
  async createFamily(request, response) {
    return response.json({create: true})
  };
  async getAllFamily(request, response) {
    return response.json({getAll: true})
  };
  async updateFamily(request, response) {
    return response.json({update: true})
  };
  async deleteFamily(request, response) {
    return response.json({delete: true})
  };
};

module.exports = FamilyController;