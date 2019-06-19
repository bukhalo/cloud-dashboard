const ovhEu = require('../../../config/ovhEu')

module.exports = {
  Query: {
    instance: async (_, { projectId, instanceId }) => {
      try {
        const req = await ovhEu.requestPromised(
          'GET',
          `/cloud/project/${projectId}/instance/${instanceId}`
        )
        return {
          id: req.id,
          flavorId: req.flavorId
        }
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
