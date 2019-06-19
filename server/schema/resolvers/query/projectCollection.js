const ovhEu = require('../../../config/ovhEu')

module.exports = {
  Query: {
    projectCollection: async () => {
      try {
        const projectIds = await ovhEu.requestPromised('GET', '/cloud/project')

        const project = projectIds.map(async id => {
          const req = await ovhEu.requestPromised('GET', `/cloud/project/${id}`)
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
        })

        return await Promise.all(project)
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
