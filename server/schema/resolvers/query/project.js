const ovhEu = require('../../../config/ovhEu')

module.exports = {
  Query: {
    project: async (_, { projectId }) => {
      try {
        const req = await ovhEu.requestPromised(
          'GET',
          `/cloud/project/${projectId}`
        )
        return {
          unleash: req.unleash,
          status: req.status.toUpperCase(),
          description: req.description,
          expiration: req.expiration,
          creationDate: req.creationDate,
          access: req.access.toUpperCase(),
          orderId: req.orderId,
          planCode: req.planCode,
          projectId: req.project_id
        }
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
