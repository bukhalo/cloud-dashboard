const axios = require('axios')

module.exports = {
  Query: {
    user: async (_, defs, { token }) => {
      try {
        const bill = await axios.get(process.env.BILLING_ENDPOINT, {
          params: {
            '/dashboard/default/start': '',
            out: 'bjson',
            auth: token
          }
        })
        if (!bill.data.error) {
          console.log(bill.data.user)
          return {
            realname: bill.data.user.realname,
            email: bill.data.user.email
          }
        } else {
          throw new Error(bill.data.error.msg)
        }
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
