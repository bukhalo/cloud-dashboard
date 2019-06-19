const ovhEu = require('../../../config/ovhEu')

module.exports = {
  Query: {
    instanceCollection: async (_, { projectId }) => {
      try {
        const instanceIds = await ovhEu.requestPromised(
          'GET',
          `/cloud/project/${projectId}/instance`
        )

        const instance = instanceIds.map(async item => {
          const req = await ovhEu.requestPromised(
            'GET',
            `/cloud/project/${projectId}/instance/${item.id}`
          )
          return {
            id: req.id,
            flavorId: req.flavorId
          }
        })

        return await Promise.all(instance)
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
