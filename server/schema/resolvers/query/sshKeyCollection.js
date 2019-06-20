const ovhEu = require('../../../config/ovhEu')

module.exports = {
  Query: {
    sshKeyCollection: async (_, { projectId }) => {
      try {
        const instanceIds = await ovhEu.requestPromised(
          'GET',
          `/cloud/project/${projectId}/sshkey`
        )

        const instance = instanceIds.map(async item => {
          const req = await ovhEu.requestPromised(
            'GET',
            `/cloud/project/${projectId}/sshkey/${item.id}`
          )
          return {
            id: req.id,
            publicKey: req.publicKey
            // regions: req.regions
          }
        })

        return await Promise.all(instance)
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
