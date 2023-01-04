class RegistrationController {
  
  async createRegistration(request, response) {
    return response.json({create: true})
  }
  async getAllRegistration(request, response) {
    return response.json({getAll: true})
  }
  async updateRegistration(request, response) {
    return response.json({update: true})
  }
  async deleteRegistration(request, response) {
    return response.json({delete: true})
  }
}
module.exports = RegistrationController
