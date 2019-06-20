const ovhEu = require('../../../config/ovhEu')

module.exports = {
  Query: {
    sshKey: async (_, { projectId, sshKeyId }) => {
      try {
        const req = await ovhEu.requestPromised(
          'GET',
          `/cloud/project/${projectId}/sshkey/${sshKeyId}`
        )
        return {
          id: req.id,
          publicKey: req.publicKey
        }
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
